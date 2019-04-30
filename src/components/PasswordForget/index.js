import React, { Component } from 'react';
import { withFirebase } from '../Firebase';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

const Initialstate = {
	email: '',
	error: null,
};

const PasswordForgetPage = () => (
	<div>
		<PasswordForgetForm />
	</div>
);

const styles = {
	forgetForm: {
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
	forgetButton: {
		height: '30px',
		width: '112px',
		fontSize: '13px',
		borderRadius: '5px',
		backgroundColor: 'lightblue',
	},
	forgetLabel: {
		fontSize: '14px',
	}
}

class PasswordForget extends Component {
	constructor(props) {
		super(props);
		this.state = { ...Initialstate };
	}

	createNotification = (type, error = '') => {
		if (type === 'success') {
			return NotificationManager.success("Email send successfully");
		}
		else {
			return NotificationManager.error(error.message);
		}
	};

	onSubmit = event => {
		event.preventDefault();
    const { email } = this.state;
    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
				this.setState({ ...Initialstate });
				this.createNotification('success');
      })
      .catch(error => {
				this.createNotification('', error);
        this.setState({ error });
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

	render() {
		const { email, error } = this.state;
		const isInvalid = email === '';

		return (
			<div style={ styles.forgetForm }>
				<h3 style={{ color: 'darkred' }}> Forgot Password </h3>
				<form onSubmit={this.onSubmit}>
					<div>
						<label style={styles.forgetLabel} >Email : </label>
						<input
							name="email"
							value={email}
							onChange={this.onChange}
							type="text"
						/>
					</div>
					<br/>
					<button style={styles.forgetButton} disabled={isInvalid} type="submit"> Reset Password </button>
				</form>
				<NotificationContainer />
			</div>
		)
	}
}
const PasswordForgetForm = withFirebase(PasswordForget);

export default PasswordForgetPage;