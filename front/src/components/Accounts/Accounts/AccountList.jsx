import Account from './Account';

export default function AccountList({ accounts, onEditing, onDelete, onDeleting }) {
	return (
		<ul className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3'>
			{accounts.map((account) => (
				<Account
					account={account}
					key={account.id}
					onEditing={onEditing}
					onDelete={onDelete}
					onDeleting={onDeleting}
				/>
			))}
		</ul>
	);
}
