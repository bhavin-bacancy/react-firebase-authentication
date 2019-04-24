import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import { NotificationManager } from 'react-notifications';
import { compose } from 'recompose';
import * as ROUTES from '../../constants/routes';

const Initialstate = {
	username: '',
	email: '',
	password: '',
	conf_password: '',
	error: null,
};

const styles = {
	signUpForm: {
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
	signUpButton: {
		height: '30px',
		width: '70px',
		fontSize: '13px',
		borderRadius: '5px',
		backgroundColor: 'lightblue',
	},
	signUpLabel: {
		fontSize: '14px',
	},
	signInLink: {
		fontSize:'15px',
		textDecoration:'none',
	},
}

const SignUpPage = () => (
	<div>
		<SignUpForm />
	</div>
);

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.state = { ...Initialstate };
	}

	onSubmit = event => {
		event.preventDefault();
		const { email, password } = this.state;
		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, password)
			.then(authUser => {
				this.setState({ ...Initialstate });
				debugger;
				NotificationManager.success('User successfully registerd');
				this.props.history.push(ROUTES.SIGN_IN);
			})
			.catch(error => {
				this.setState({ error });
				NotificationManager.error(error);
			});
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { username, email, password, conf_password, error, } = this.state;
		const isInvalid = password !== conf_password || password === '' || email === '' || username === '';
		return (
			<div style={styles.signUpForm}>
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				<h4 style={{ color: 'darkred' }}> Create an account </h4>
				<form onSubmit={this.onSubmit} style={{ justifyContent: 'center' }}>
					<div>
						<label style={styles.signUpLabel}>Username : </label>
						<input
							name="username"
							value={username}
							onChange={this.onChange}
							type="text"
						/>
					</div>
					<br />
					<div>
						<label style={styles.signUpLabel} >Email : </label>
						<input
							name="email"
							value={email}
							onChange={this.onChange}
							type="text"
						/>
					</div>
					<br />
					<div>
						<label style={styles.signUpLabel}>Password : </label>
						<input
							name="password"
							value={password}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<br />
					<div>
						<label style={styles.signUpLabel}>Confirm Password : </label>
						<input
							name="conf_password"
							value={conf_password}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<br />
					<button style={styles.signUpButton} disabled={isInvalid} type="submit">Sign Up</button>
				</form>
				<p style={{ textAlign: 'center', marginTop: '40px' }}>
					Already have an account? &nbsp;<Link style={styles.signInLink} to={ROUTES.SIGN_IN}>Sign In</Link>
				</p>
			</div>
		)
	}
}
const SignUpForm = compose(
	withRouter,
	withFirebase,
)(SignUp);

export default SignUpPage