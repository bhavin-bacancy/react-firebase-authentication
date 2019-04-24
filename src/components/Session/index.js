import React, { Component } from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';
import withAuthorization from './withAuthorization';

class Session extends Component {
	render () {
		return (
			<div>
				session
			</div>
		)
	}
}

export { AuthUserContext, withAuthentication, withAuthorization };
export default Session