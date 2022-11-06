import classes from './Navbar.module.css';

export default function Navbar({ currentUser }) {
	return (
		<nav className={classes.navbar}>
			{currentUser ? (
				<div>
					Hello, {currentUser.name} <a href="#.com">logout</a>
				</div>
			) : (
				<div>
					<a href="#.com">login</a>
					<a href="#.com">signup</a>
				</div>
			)}
		</nav>
	);
}
