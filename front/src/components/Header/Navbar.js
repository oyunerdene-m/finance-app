import classes from './Navbar.module.css';

export default function Navbar({ currentUser }) {
	console.log(currentUser);
	return (
		<nav className={classes.navbar}>
			<a href="#.com">login</a>
			<a href="#.com">logout</a>
			<a href="#.com">signup</a>
		</nav>
	);
}
