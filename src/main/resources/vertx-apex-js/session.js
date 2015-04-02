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

/** @module vertx-apex-js/session */
var utils = require('vertx-js/util/utils');
var SessionStore = require('vertx-apex-js/session_store');
var AuthProvider = require('vertx-auth-js/auth_provider');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSession = io.vertx.ext.apex.Session;

/**
 Represents a browser session.
 <p>
 Sessions persist between HTTP requests for a single browser session. They are deleted when the browser is closed, or
 they time-out. Session cookies are used to maintain sessions using a secure UUID.
 <p>
 Sessions can be used to maintain data for a browser session, e.g. a shopping basket.
 <p>
 @class
*/
var Session = function(j_val) {

  var j_session = j_val;
  var that = this;

  /**
   @return The unique ID of the session. This is generated using a random secure UUID.

   @public

   @return {string}
   */
  this.id = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_session["id()"]();
    } else utils.invalidArgs();
  };

  /**
   Put some data in a session

   @public
   @param key {string} the key for the data 
   @param obj {Object} the data 
   @return {Session} a reference to this, so the API can be used fluently
   */
  this.put = function(key, obj) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && true) {
      j_session["put(java.lang.String,java.lang.Object)"](key, utils.convParamTypeUnknown(obj));
      return that;
    } else utils.invalidArgs();
  };

  /**
   Get some data from the session

   @public
   @param key {string} the key of the data 
   @return {Object} the data
   */
  this.get = function(key) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_session["get(java.lang.String)"](key));
    } else utils.invalidArgs();
  };

  /**
   Remove some data from the session

   @public
   @param key {string} the key of the data 
   @return {Object} the data that was there or null if none there
   */
  this.remove = function(key) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'string') {
      return utils.convReturnTypeUnknown(j_session["remove(java.lang.String)"](key));
    } else utils.invalidArgs();
  };

  /**
   @return the time the session was last accessed

   @public

   @return {number}
   */
  this.lastAccessed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_session["lastAccessed()"]();
    } else utils.invalidArgs();
  };

  /**
   Destroy the session

   @public

   */
  this.destroy = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_session["destroy()"]();
    } else utils.invalidArgs();
  };

  /**
   @return has the session been destroyed?

   @public

   @return {boolean}
   */
  this.isDestroyed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_session["isDestroyed()"]();
    } else utils.invalidArgs();
  };

  /**
   @return  true if the user is logged in.

   @public

   @return {boolean}
   */
  this.isLoggedIn = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_session["isLoggedIn()"]();
    } else utils.invalidArgs();
  };

  /**
   Set the principal (the unique user id) of the user -this signifies the user is logged in

   @public
   @param principal {Object} the principal 
   */
  this.setPrincipal = function(principal) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object') {
      j_session["setPrincipal(io.vertx.core.json.JsonObject)"](utils.convParamJsonObject(principal));
    } else utils.invalidArgs();
  };

  /**
   Get the principal

   @public

   @return {Object} the principal or null if not logged in
   */
  this.getPrincipal = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return utils.convReturnJson(j_session["getPrincipal()"]());
    } else utils.invalidArgs();
  };

  /**
   Does the logged in user have the specified role?  Information is cached for the lifetime of the session

   @public
   @param role {string} the role 
   @param resultHandler {function} will be called with a result true/false 
   */
  this.hasRole = function(role, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_session["hasRole(java.lang.String,io.vertx.core.Handler)"](role, function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Does the logged in user have the specified permissions?  Information is cached for the lifetime of the session

   @public
   @param permission {string} the permission 
   @param resultHandler {function} will be called with a result true/false 
   */
  this.hasPermission = function(permission, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_session["hasPermission(java.lang.String,io.vertx.core.Handler)"](permission, function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Does the logged in user have the specified roles?  Information is cached for the lifetime of the session

   @public
   @param roles {Array.<string>} the roles 
   @param resultHandler {function} will be called with a result true/false 
   */
  this.hasRoles = function(roles, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      j_session["hasRoles(java.util.Set,io.vertx.core.Handler)"](utils.convParamSetBasicOther(roles), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Does the logged in user have the specified permissions?  Information is cached for the lifetime of the session

   @public
   @param permissions {Array.<string>} the permissions 
   @param resultHandler {function} will be called with a result true/false 
   */
  this.hasPermissions = function(permissions, resultHandler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'object' && __args[0] instanceof Array && typeof __args[1] === 'function') {
      j_session["hasPermissions(java.util.Set,io.vertx.core.Handler)"](utils.convParamSetBasicOther(permissions), function(ar) {
      if (ar.succeeded()) {
        resultHandler(ar.result(), null);
      } else {
        resultHandler(null, ar.cause());
      }
    });
    } else utils.invalidArgs();
  };

  /**
   Logout the user.

   @public

   */
  this.logout = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_session["logout()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the amount of time in ms, after which the session will expire, if not accessed.

   @public

   @return {number}
   */
  this.timeout = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_session["timeout()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the store for the session

   @public

   @return {SessionStore}
   */
  this.sessionStore = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new SessionStore(j_session["sessionStore()"]());
    } else utils.invalidArgs();
  };

  /**
   Mark the session as being accessed.

   @public

   */
  this.setAccessed = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_session["setAccessed()"]();
    } else utils.invalidArgs();
  };

  /**
   Set the auth provider

   @public
   @param authProvider {AuthProvider} the auth provider 
   */
  this.setAuthProvider = function(authProvider) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_session["setAuthProvider(io.vertx.ext.auth.AuthProvider)"](authProvider._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_session;
};

// We export the Constructor function
module.exports = Session;