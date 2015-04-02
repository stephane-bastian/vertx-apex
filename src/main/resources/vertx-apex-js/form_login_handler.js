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

/** @module vertx-apex-js/form_login_handler */
var utils = require('vertx-js/util/utils');
var RoutingContext = require('vertx-apex-js/routing_context');
var AuthProvider = require('vertx-auth-js/auth_provider');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JFormLoginHandler = io.vertx.ext.apex.handler.FormLoginHandler;

/**
 Handler that handles login from a form on a custom login page.
 <p>
 @class
*/
var FormLoginHandler = function(j_val) {

  var j_formLoginHandler = j_val;
  var that = this;

  /**

   @public
   @param arg0 {RoutingContext} 
   */
  this.handle = function(arg0) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_formLoginHandler["handle(io.vertx.ext.apex.RoutingContext)"](arg0._jdel);
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_formLoginHandler;
};

/**
 Create a handler

 @memberof module:vertx-apex-js/form_login_handler
 @param authProvider {AuthProvider} the auth service to use 
 @param usernameParam {string} the value of the form attribute which will contain the username 
 @param passwordParam {string} the value of the form attribute which will contain the password 
 @param returnURLParam {string} the value of the form attribute which will contain the return url 
 @return {FormLoginHandler} the handler
 */
FormLoginHandler.create = function() {
  var __args = arguments;
  if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
    return new FormLoginHandler(JFormLoginHandler["create(io.vertx.ext.auth.AuthProvider)"](__args[0]._jdel));
  }else if (__args.length === 4 && typeof __args[0] === 'object' && __args[0]._jdel && typeof __args[1] === 'string' && typeof __args[2] === 'string' && typeof __args[3] === 'string') {
    return new FormLoginHandler(JFormLoginHandler["create(io.vertx.ext.auth.AuthProvider,java.lang.String,java.lang.String,java.lang.String)"](__args[0]._jdel, __args[1], __args[2], __args[3]));
  } else utils.invalidArgs();
};

// We export the Constructor function
module.exports = FormLoginHandler;