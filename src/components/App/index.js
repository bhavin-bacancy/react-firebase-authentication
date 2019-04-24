import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import HomePage from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import DashboardPage from '../Dashboard';
import { withAuthentication } from '../Session';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import * as ROUTES from '../../constants/routes';


class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<Navigation />
					<Route exact path={ROUTES.HOME} component={HomePage} />
					<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
					<Route path={ROUTES.SIGN_IN} component={SignInPage} />
					<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
					<Route path={ROUTES.DASHBOARD} component={DashboardPage} />
					<Route path={ROUTES.ACCOUNT} component={AccountPage} />
					<Route path={ROUTES.ADMIN} component={AdminPage} />
				</div>
			</Router>
		)
	}
}

export default withAuthentication(App);