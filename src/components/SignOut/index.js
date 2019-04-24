import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const styles = {
	signOutLink: {
		fontSize:'15px',
		textDecoration:'none',
	},
}
class SignOut extends Component {
	
	onSignOut = () => {
		const { firebase } = this.props;
		firebase.doSignOut()
			.then(() => {
				alert("User successfully logout...!!!");
			})
			.catch(error => {
				this.setState({ error });
			});
	}

	render() {
		return (
			<div>
				<Link style={styles.signOutLink} onClick={this.onSignOut}><i className="fas fa-sign-out-alt"></i> Sign Out </Link>
			</div>
		)
	}
}

export default withFirebase(SignOut);