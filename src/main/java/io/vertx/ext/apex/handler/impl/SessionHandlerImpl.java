/*
 * Copyright 2014 Red Hat, Inc.
 *
 *  All rights reserved. This program and the accompanying materials
 *  are made available under the terms of the Eclipse Public License v1.0
 *  and Apache License v2.0 which accompanies this distribution.
 *
 *  The Eclipse Public License is available at
 *  http://www.eclipse.org/legal/epl-v10.html
 *
 *  The Apache License v2.0 is available at
 *  http://www.opensource.org/licenses/apache2.0.php
 *
 *  You may elect to redistribute this code under either of these licenses.
 */

package io.vertx.ext.apex.handler.impl;

import io.vertx.core.logging.Logger;
import io.vertx.core.logging.impl.LoggerFactory;
import io.vertx.ext.apex.Cookie;
import io.vertx.ext.apex.RoutingContext;
import io.vertx.ext.apex.Session;
import io.vertx.ext.apex.handler.SessionHandler;
import io.vertx.ext.apex.sstore.SessionStore;

/**
 * @author <a href="http://tfox.org">Tim Fox</a>
 */
public class SessionHandlerImpl implements SessionHandler {

  private static final Logger log = LoggerFactory.getLogger(SessionHandlerImpl.class);

  private final SessionStore sessionStore;
  private String sessionCookieName;
  private long sessionTimeout;
  private boolean nagHttps;

  public SessionHandlerImpl(String sessionCookieName, long sessionTimeout, boolean nagHttps, SessionStore sessionStore) {
    this.sessionCookieName = sessionCookieName;
    this.sessionTimeout = sessionTimeout;
    this.nagHttps = nagHttps;
    this.sessionStore = sessionStore;
  }

  @Override
  public SessionHandler setSessionTimeout(long timeout) {
    this.sessionTimeout = timeout;
    return this;
  }

  @Override
  public SessionHandler setNagHttps(boolean nag) {
    this.nagHttps = nag;
    return this;
  }

  @Override
  public SessionHandler setSessionCookieName(String sessionCookieName) {
    this.sessionCookieName = sessionCookieName;
    return this;
  }

  @Override
  public void handle(RoutingContext context) {

    if (nagHttps) {
      String uri = context.request().absoluteURI();
      if (!uri.startsWith("https:")) {
        log.warn("Using session cookies without https could make you susceptible to session hijacking: " + uri);
      }
    }

    // Look for existing session cookie
    Cookie cookie = context.getCookie(sessionCookieName);
    if (cookie != null) {
      // Look up session
      String sessionID = cookie.getValue();
      sessionStore.get(sessionID, res -> {
        if (res.succeeded()) {
          Session session = res.result();
          if (session != null) {
            context.setSession(session);
            session.setAccessed();
            addStoreSessionHandler(context);
          } else {
            // Cannot find session - either it timed out, or was explicitly destroyed at the server side on a
            // previous request.
            // Either way, we create a new one.
            createNewSession(context);
          }
        } else {
          context.fail(res.cause());
        }
        context.next();
      });
    } else {
      createNewSession(context);
      context.next();
    }
  }

  private void addStoreSessionHandler(RoutingContext context) {
    context.addHeadersEndHandler(v -> {
      if (!context.session().isDestroyed()) {
        // Store the session
        context.session().setAccessed();
        sessionStore.put(context.session(), res -> {
          if (res.succeeded()) {
            // FIXME ???
            // We need to wait for session to be persisted before returning response otherwise
            // user can submit new request on session which could get processed before store is complete
          } else {
            // Failed to store session
            context.fail(res.cause());
          }
        });
      }
    });
  }

  private void createNewSession(RoutingContext context) {
    Session session = sessionStore.createSession(sessionTimeout);
    context.setSession(session);
    Cookie cookie = Cookie.cookie(sessionCookieName, session.id());
    cookie.setPath("/");
    // Don't set max age - it's a session cookie
    context.addCookie(cookie);
    addStoreSessionHandler(context);
  }
}
