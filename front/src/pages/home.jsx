import Accounts from './accounts';
import Transactions from './transactions';
import Login from '../components/Users/Login';

export default function Home({ currentUser }) {
	return (
		<>
			{currentUser !== null ? (
				<>
					<h1>Finance App!!!!</h1>
					<h3>Total balance:</h3>
					<Accounts />
					<Transactions />
				</>
			) : (
				<Login />
			)}
		</>
	);
}
