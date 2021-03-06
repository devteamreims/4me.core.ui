var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
var sinonChai = require('sinon-chai');
var Promise = require('bluebird');

var mocks = require('angular-mocks');

chai.use(chaiAsPromised);
chai.use(sinonChai);

var sinon = require('sinon');
var sinonAsPromised = require('sinon-as-promised')(Promise);

global.sinon = sinon;
global.expect = chai.expect;
global.sinonAsPromised = sinonAsPromised;
global.Promise = Promise;
global.module = angular.mock.module;

chai.should();
