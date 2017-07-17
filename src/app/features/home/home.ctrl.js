export default class HomeCtrl {
	constructor ( $state ) {
		this._$state = $state;
	}

	gotoRegister () {
		this._$state.go( 'register' );
	}
};
