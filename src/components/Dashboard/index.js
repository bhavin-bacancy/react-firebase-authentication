import React, { Component } from 'react';
import { withAuthorization } from '../Session';

const styles = {
	HeadingWraper: {
		textAlign: 'center',
    color: 'darkred',
    marginTop: '20px',
	},
}

class Dashboard extends Component {
	render () {
		return (
			<div>
				<h4 style={ styles.HeadingWraper }> Welcome to Dashboard </h4>
			</div>
		)
	}
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Dashboard);
