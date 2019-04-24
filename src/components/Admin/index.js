import React, { Component } from 'react'
import { withAuthorization } from '../Session';

const styles = {
	HeadingWrapeer: {
		textAlign: 'center',
    color: 'darkred',
    marginTop: '20px',
	},
}

class Admin extends Component {
	render () {
		return (
			<div>
				<h4 style={ styles.HeadingWrapeer }> Welcome to Admin page </h4>
			</div>
		)
	}
}
const condition = authUser => !!authUser;

export default withAuthorization(condition)(Admin);