import Accounts from './accounts';
import Transactions from './transactions';

export default function Home() {
	return (
		<>
			<h1>Finance App!!!!</h1>
			<h3>Total balance:</h3>
			<h3>Accounts:</h3>
			<Accounts />
			<h3>Last transactions:</h3>
			<Transactions />
			<br />
		</>
	);
}
