import 'bootstrap/dist/css/bootstrap.css';

import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './app.config';

import homeModule from './features/home/';

const MODULE_NAME = 'app';

angular.module( 'app', [ uirouter, homeModule ] )
	.config( routing );

