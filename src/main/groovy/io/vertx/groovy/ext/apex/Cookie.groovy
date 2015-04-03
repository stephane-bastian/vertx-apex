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

package io.vertx.groovy.ext.apex;
import groovy.transform.CompileStatic
import io.vertx.lang.groovy.InternalHelper
/**
 * Represents an HTTP Cookie.
 * <p>
 * All cookies must have a name and a value and can optionally have other fields set such as path, domain, etc.
 * <p>
 * (Derived from io.netty.handler.codec.http.Cookie)
*/
@CompileStatic
public class Cookie {
  final def io.vertx.ext.apex.Cookie delegate;
  public Cookie(io.vertx.ext.apex.Cookie delegate) {
    this.delegate = delegate;
  }
  public Object getDelegate() {
    return delegate;
  }
  /**
   * Create a new cookie
   * @param name the name of the cookie
   * @param value the cookie value
   * @return the cookie
   */
  public static Cookie cookie(String name, String value) {
    def ret= new io.vertx.groovy.ext.apex.Cookie(io.vertx.ext.apex.Cookie.cookie(name, value));
    return ret;
  }
  /**
   * @return the name of this cookie
   * @return 
   */
  public String getName() {
    def ret = this.delegate.getName();
    return ret;
  }
  /**
   * @return the value of this cookie
   * @return 
   */
  public String getValue() {
    def ret = this.delegate.getValue();
    return ret;
  }
  /**
   * Sets the value of this cookie
   * @param value The value to set
   * @return a reference to this, so the API can be used fluently
   */
  public Cookie setValue(String value) {
    this.delegate.setValue(value);
    return this;
  }
  /**
   * Sets the domain of this cookie
   * @param domain The domain to use
   * @return a reference to this, so the API can be used fluently
   */
  public Cookie setDomain(String domain) {
    this.delegate.setDomain(domain);
    return this;
  }
  /**
   * @return  the domain for the cookie
   * @return 
   */
  public String getDomain() {
    def ret = this.delegate.getDomain();
    return ret;
  }
  /**
   * Sets the path of this cookie.
   * @param path The path to use for this cookie
   * @return a reference to this, so the API can be used fluently
   */
  public Cookie setPath(String path) {
    this.delegate.setPath(path);
    return this;
  }
  /**
   * @return the path for this cookie
   */
  public String getPath() {
    def ret = this.delegate.getPath();
    return ret;
  }
  /**
   * Sets the maximum age of this cookie in seconds.
   * If an age of <code>0</code> is specified, this cookie will be
   * automatically removed by browser because it will expire immediately.
   * If  is specified, this cookie will be removed when the
   * browser is closed.
   * If you don't set this the cookie will be a session cookie and be removed when the browser is closed.
   * @param maxAge The maximum age of this cookie in seconds
   * @return 
   */
  public Cookie setMaxAge(long maxAge) {
    def ret= new io.vertx.groovy.ext.apex.Cookie(this.delegate.setMaxAge(maxAge));
    return ret;
  }
  /**
   * Sets the security getStatus of this cookie
   * @param secure True if this cookie is to be secure, otherwise false
   * @return a reference to this, so the API can be used fluently
   */
  public Cookie setSecure(boolean secure) {
    this.delegate.setSecure(secure);
    return this;
  }
  /**
   * Determines if this cookie is HTTP only.
   * If set to true, this cookie cannot be accessed by a client
   * side script. However, this works only if the browser supports it.
   * For for information, please look
   * <a href="http://www.owasp.org/index.php/HTTPOnly">here</a>.
   * @param httpOnly True if the cookie is HTTP only, otherwise false.
   * @return 
   */
  public Cookie setHttpOnly(boolean httpOnly) {
    def ret= new io.vertx.groovy.ext.apex.Cookie(this.delegate.setHttpOnly(httpOnly));
    return ret;
  }
  /**
   * Set the version of the cookie
   * @param version 0 or 1
   * @return a reference to this, so the API can be used fluently
   */
  public Cookie setVersion(int version) {
    this.delegate.setVersion(version);
    return this;
  }
  /**
   * Encode the cookie to a string. This is what is used in the Set-Cookie header
   * @return the encoded cookie
   */
  public String encode() {
    def ret = this.delegate.encode();
    return ret;
  }
  /**
   * Has the cookie been changed? Changed cookies will be saved out in the response and sent to the browser.
   * @return true if changed
   */
  public boolean isChanged() {
    def ret = this.delegate.isChanged();
    return ret;
  }
  /**
   * Set the cookie as being changed. Changed will be true for a cookie just created, false by default if just
   * read from the request
   * @param changed true if changed
   */
  public void setChanged(boolean changed) {
    this.delegate.setChanged(changed);
  }
}
