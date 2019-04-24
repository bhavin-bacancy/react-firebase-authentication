import React, { Component } from 'react';
import AuthUserContext from './context';
import withAuthentication from './withAuthentication';

class Session extends Component {
	render () {
		return (
			<div>
				session
			</div>
		)
	}
}

export { AuthUserContext, withAuthentication };
export default Session