/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

package io.vertx.groovy.ext.apex.handler;
import groovy.transform.CompileStatic
import io.vertx.lang.groovy.InternalHelper
import io.vertx.groovy.ext.apex.RoutingContext
import io.vertx.groovy.ext.apex.templ.TemplateEngine
import io.vertx.core.Handler
/**
 *
 * A handler which renders responses using a template engine and where the template name is selected from the URI
 * path.
*/
@CompileStatic
public class TemplateHandler implements Handler<RoutingContext> {
  final def io.vertx.ext.apex.handler.TemplateHandler delegate;
  public TemplateHandler(io.vertx.ext.apex.handler.TemplateHandler delegate) {
    this.delegate = delegate;
  }
  public Object getDelegate() {
    return delegate;
  }
  public void handle(RoutingContext arg0) {
    ((io.vertx.core.Handler) this.delegate).handle((io.vertx.ext.apex.RoutingContext)arg0.getDelegate());
  }
  /**
   * Create a handler
   * @param engine the template engine
   * @return the handler
   */
  public static TemplateHandler create(TemplateEngine engine) {
    def ret= new io.vertx.groovy.ext.apex.handler.TemplateHandler(io.vertx.ext.apex.handler.TemplateHandler.create((io.vertx.ext.apex.templ.TemplateEngine)engine.getDelegate()));
    return ret;
  }
  /**
   * Create a handler
   * @param engine the template engine
   * @param templateDirectory the template directory where templates will be looked for
   * @param contentType the content type header to be used in the response
   * @return the handler
   */
  public static TemplateHandler create(TemplateEngine engine, String templateDirectory, String contentType) {
    def ret= new io.vertx.groovy.ext.apex.handler.TemplateHandler(io.vertx.ext.apex.handler.TemplateHandler.create((io.vertx.ext.apex.templ.TemplateEngine)engine.getDelegate(), templateDirectory, contentType));
    return ret;
  }
}
