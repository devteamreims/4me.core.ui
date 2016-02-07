(function() {
'use strict';

/**
 * @ngdoc overview
 * @name 4me.core.cwp
 * @description
 * # CWP module
 *
 * Meta module to include cwp components
 */

require('./cwp.services.js');
require('./cwp.interceptor.js');
require('./cwp.components.js');

angular.module('4me.core.cwp', [
  '4me.core.cwp.services',
  '4me.core.cwp.components',
  '4me.core.cwp.interceptor'
]);

}());
