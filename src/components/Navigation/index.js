import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
import SignOut from '../SignOut';

const styles = {
	wrapper: {
		display: 'flex',
		justifyContent: 'space-evenly',
		backgroundColor: 'darkgrey',
		height: '50px',
		alignItems: 'center',
		textDecoration: 'none',
	},
	navigationLink: {
		fontSize:'15px',
		textDecoration:'none',
	},
}

const Navigation = () => (
	<div>
		<AuthUserContext.Consumer>
			{authUser =>
				authUser ? <NavigationAuth /> : <NavigationNonAuth />
			}
		</AuthUserContext.Consumer>
	</div>
);
const NavigationAuth = () => (
	<div style={styles.wrapper}>
		<Link style={styles.navigationLink} to={ROUTES.HOME}><i className="fa fa-home"></i> Home</Link>
		<Link style={styles.navigationLink} to={ROUTES.DASHBOARD}><i className="fa fa-desktop"></i> Dashboard</Link>
		<Link style={styles.navigationLink} to={ROUTES.ACCOUNT}><i className="fa fa-user"></i> Account</Link>
    <Link style={styles.navigationLink} to={ROUTES.ADMIN}><i className="fas fa-user-cog"></i> Admin</Link>
		<SignOut />
	</div>
);

const NavigationNonAuth = () => (
	<div style={styles.wrapper}>
		<Link style={styles.navigationLink} to={ROUTES.HOME}><i className="fa fa-home"></i> Home</Link>
		<Link style={styles.navigationLink} to={ROUTES.SIGN_UP}><i className="fa fa-user-plus"></i> Sign Up</Link>
		<Link style={styles.navigationLink} to={ROUTES.SIGN_IN}><i className="fas fa-sign-in-alt"></i> Sign In</Link>
	</div>
);

export default Navigation