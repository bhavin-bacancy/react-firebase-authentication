import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

const Initialstate = {
	password: '',
	conf_password: '',
	error: null,
};

const styles = {
	changepwdForm: {
		marginRight: 'auto',
		padding: '32px',
		marginTop: '1rem',
		marginLeft: 'auto',
		maxWidth: '400px',
		minHeight: 'auto',
		backgroundColor: 'floralwhite',
		border: '1px solid lightgrey',
		borderRadius: '20px',
		boxShadow: '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)',
		textAlign: 'center'
	},
	changepwdButton: {
		height: '30px',
		width: '125px',
		fontSize: '13px',
		borderRadius: '5px',
		backgroundColor: 'lightblue',
	},
	changepwdLabel: {
		fontSize: '14px',
	}
}

class PasswordChange extends Component {

	constructor(props) {
		super(props);
		this.state = { ...Initialstate };
	}

	onSubmit = event => {
		event.preventDefault();
		const { password } = this.state;
		this.props.firebase
			.doPasswordUpdate(password)
			.then(() => {
				this.setState({ ...Initialstate });
				alert("Password updated successfully...!!!");
			})
			.catch(error => {
				this.setState({ error });
			});
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { password, conf_password, error } = this.state;
		const isInvalid = password !== conf_password || password === '';
		return (
			<div style={styles.changepwdForm}>
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				<h4 style={{ color: 'darkred' }}> Change Password </h4>
				<form onSubmit={this.onSubmit}>
					<div>
						<label style={styles.changepwdLabel}>New Password : </label>
						<input
							name="password"
							value={password}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<br/>
					<div>
						<label style={styles.changepwdLabel}>Confirm New Password : </label>
						<input
							name="conf_password"
							value={conf_password}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<br />
					<button style={styles.changepwdButton} disabled={isInvalid} type="submit"> Change Password </button>
				</form>
			</div>
		)
	}
}

export default withFirebase(PasswordChange);