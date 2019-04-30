import React, { Component } from 'react';
import PasswordChange from '../PasswordChange';
import { AuthUserContext, withAuthorization } from '../Session';

const styles = {
	HeadingWraper: {
		display: 'flex',
		justifyContent: 'center',
    color: 'darkred',
    marginTop: '20px',
	},
}
class Account extends Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{authUser => (
					<div>
						<h4 style={styles.HeadingWraper}>Welcome {authUser.email}</h4>
						<PasswordChange />
					</div>
				)}
			</AuthUserContext.Consumer>
		)
	}
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Account);