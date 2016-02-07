(function() {
'use strict';

/**
 * @ngdoc overview
 * @name 4me.core.organs
 * @description
 * # Organs module
 *
 * Meta module to include organs components/services
 * Organs are 4me submodules that wire into this framework
 */
require('./organs.components.js');
require('./organs.services.js');

angular.module('4me.core.organs', [
  '4me.core.organs.services',
  '4me.core.organs.components'
]);

}());