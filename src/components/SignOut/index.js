import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { Link, Redirect } from 'react-router-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import * as ROUTES from '../../constants/routes';
import 'react-notifications/lib/notifications.css';

const styles = {
	signOutLink: {
		fontSize:'15px',
		textDecoration:'none',
	},
}
class SignOut extends Component {
	
	createNotification = (type, error = '') => {
		if(type === 'success'){
			return NotificationManager.success("User logged out successfully");
		}
		else {
			return NotificationManager.error(error.message);
		}
	};

	onSignOut = () => {
		const { firebase } = this.props;
		firebase.doSignOut()
			.then(() => {
				this.createNotification('success');
			})
			.catch(error => {
				this.createNotification('', error);
			});
	}

	render() {
		return (
			<div>
				<Link style={styles.signOutLink} to='' onClick={this.onSignOut}><i className="fas fa-sign-out-alt"></i> Sign Out </Link>
				<NotificationContainer />
			</div>
		)
	}
}

export default withFirebase(SignOut);