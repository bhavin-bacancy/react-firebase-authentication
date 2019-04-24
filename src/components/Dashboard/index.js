import React, { Component } from 'react';

const styles = {
	HeadingWrapeer: {
		textAlign: 'center',
    color: 'darkred',
    marginTop: '20px',
	},
}

class Dashboard extends Component {
	render () {
		return (
			<div>
				<h4 style={ styles.HeadingWrapeer }> Welcome to Dashboard </h4>
			</div>
		)
	}
}

export default Dashboard