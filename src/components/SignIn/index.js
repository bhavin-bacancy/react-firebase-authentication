import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const Initialstate = {
	email: '',
	password: '',
	error: null,
};

const styles = {
	signInForm: {
		marginRight: 'auto',
		padding: '32px',
		marginTop: '1rem',
		marginLeft: 'auto',
		maxWidth: '400px',
		minHeight: 'auto',
		backgroundColor: 'floralwhite',
		borderRadius: '20px',
		border: '1px solid lightgrey',
		boxShadow: '0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07)',
		textAlign: 'center'
	},
	signInButton: {
		height: '30px',
		width: '70px',
		fontSize: '13px',
		borderRadius: '5px',
		backgroundColor: 'lightblue',
	},
	signInLabel: {
		fontSize: '14px',
	},
	signInLink: {
		textDecoration: 'none',
		fontSize:'15px',
	},
}

const SignInPage = () => (
	<div>
		<SignInForm />
	</div>
);

class SignIn extends Component {

	constructor(props) {
		super(props);
		this.state = { ...Initialstate };
	}

	onSubmit = event => {
		event.preventDefault();
		const { email, password } = this.state;
		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
			.then(() => {
				this.setState({ ...Initialstate });
				alert("User successfully login...!!!");
				this.props.history.push(ROUTES.HOME);
			})
			.catch(error => {
				this.setState({ error });
			});
	};

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	};

	render() {
		const { email, password, error } = this.state;
		const isInvalid = password === '' || email === '';
		return (
			<div style={styles.signInForm}>
				{error && <p style={{ color: 'red' }}>{error.message}</p>}
				<h4 style={{ color: 'darkred' }}> Sign In </h4>
				<form onSubmit={this.onSubmit}>
					<div>
						<label style={styles.signInLabel}>Email : </label>
						<input
							name="email"
							value={email}
							onChange={this.onChange}
							type="text"
						/>
					</div>
					<br />
					<div>
						<label style={styles.signInLabel}>Password : </label>
						<input
							name="password"
							value={password}
							onChange={this.onChange}
							type="password"
						/>
					</div>
					<br />
					<button style={styles.signInButton} disabled={isInvalid} type="submit"> Sign In </button>
				</form>
				<p style={{ textAlign: 'center', marginTop: '40px' }}>
					Don't have an account? &nbsp;<Link style={styles.signInLink} to={ROUTES.SIGN_UP}>Sign Up</Link>
				</p>
				<p style={{ textAlign: 'center'}}>
					<Link style={styles.signInLink} to={ROUTES.PASSWORD_FORGET}><i class="fas fa-key"></i> Forgot Password?</Link>
				</p>
			</div>
		)
	}
}

const SignInForm = compose(
	withRouter,
	withFirebase,
)(SignIn);

export default SignInPage