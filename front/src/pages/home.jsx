import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<h1>Finance App</h1>
			<div>
				<Link to='/accounts'>accounts</Link>
			</div>
			<br />
			<div>
				<Link to='/transactions'>All transactions</Link>
			</div>
		</>
	);
}
