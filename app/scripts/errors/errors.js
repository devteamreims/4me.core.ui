(function() {
'use strict';

/**
 * @ngdoc overview
 * @name 4me.core.errors
 * @description
 * # Error management module
 *
 * Meta module to include error components/services
 */
angular.module('4me.core.errors', [
  '4me.core.lodash'
])
.factory('errors', errors);

errors.$inject = [];
function errors() {
  // Array to hold our errors
  /** Error object prototype :
   * {
   *   sender: 'core' // String to hold our sender module
   *   type: 'error' // String to hold our error type (critical, warning, info)
   *   message: 'Invalid info from backend' // String to hold our user friendly info
   *   reason: {} // Object with more detailed stuff
   * }
   */

  var errors = [];
  var service = {};

  // Promise version of our error catcher
  service.catch = function(sender, type, message) {
    return function(reason) {
      service.add(sender, type, message, reason);
    };
  };

  // Add an error
  service.add = function(sender, type, message, reason) {
    var e = {
      sender: sender || 'Unknown',
      type: type || 'warning',
      message: message || 'Unknown message',
      reason: reason || {}
    };
    errors.push(e);
    return e;
  };

  // Get all errors
  service.get = function() {
    return errors;
  }

  return service;

}

}());
