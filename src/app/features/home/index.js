import angular from 'angular';

import uirouter from 'angular-ui-router';

import routing from './home.route';
import HomeCtrl from './home.ctrl';

export default angular.module( 'app.home', [ uirouter ] )
	.config( routing )
	.controller( 'HomeCtrl', [ '$state', HomeCtrl ] )
	.name;
