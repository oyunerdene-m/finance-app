import Accounts from './accounts';
import Transactions from './transactions';

export default function Home() {
	return (
		<>
			<h1>Finance App!!!!</h1>
			<h3>Total balance:</h3>

			<Accounts />
			<Transactions />
			<br />
		</>
	);
}
