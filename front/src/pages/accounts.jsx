import { useState, useContext } from 'react';
import AccountList from '../components/Accounts/Accounts/AccountList';
import CreateAccount from '../components/Accounts/NewAccount/CreateAccount';
import EditAccount from '../components/Accounts/EditAccount';
import AccountsContext from '../context/accounts-context';
import Modal from '../components/UI/Modal';
import Confirmation from '../components/UI/Confirmation';
import fetchData from '../lib/fetchData';

export default function Accounts() {
	const { accounts, setAccounts } = useContext(AccountsContext);
	const [isFormShow, setIsFormShow] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [isDeleting, setIsDeleting] = useState(false);
	const [editedAccount, setEditedAccount] = useState();
	const [deletedAccountId, setDeletedAccountId] = useState('');

	async function addAccountHandler(accountData) {
		try {
			const response = await fetchData('/api/v1/accounts/add', 'POST', accountData);
			setAccounts([...accounts, response.account]);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		setIsFormShow(false);
	}

	function closeHandler() {
		setIsFormShow(false);
	}

	function editingAccount(id) {
		setIsEditing(true);
		accounts.forEach((account) => {
			if (account.id === id) {
				setEditedAccount(account);
			}
		});
	}

	async function editAccountHandler(id, editedAccountData) {
		try {
			const response = await fetchData(`/api/v1/accounts/edit/${id}`, 'POST', editedAccountData);
			setAccounts((prevAccounts) =>
				prevAccounts.map((account) => {
					return account.id === id ? response.account : account;
				}),
			);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		setIsEditing(false);
	}

	async function deleteAccountHandler() {
		try {
			await fetchData(`/api/v1/accounts/delete/${deletedAccountId}`, 'POST', undefined);
			setAccounts((prevAccounts) =>
				prevAccounts.filter((account) => account.id !== deletedAccountId),
			);
		} catch (error) {
			console.error(error);
			alert(error);
		}
		setIsDeleting(false);
	}

	return (
		<>
			{isDeleting && (
				<Modal onCancel={() => setIsDeleting(false)}>
					<Confirmation
						onCancel={() => setIsDeleting(false)}
						onDelete={deleteAccountHandler}
						name='account'
					/>
				</Modal>
			)}

			<div>
				<div className='flex justify-between mb-4'>
					<h3>Your Accounts</h3>
					{isFormShow ? (
						''
					) : (
						<button onClick={() => setIsFormShow(true)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6 border border-more-gray rounded p-0.5'
							>
								<path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
							</svg>
						</button>
					)}
				</div>
				<AccountList
					accounts={accounts}
					onEditing={editingAccount}
					onDelete={setDeletedAccountId}
					onDeleting={() => setIsDeleting(true)}
				/>
			</div>
			<br />

			<div>
				{isFormShow && (
					<CreateAccount onAddAccount={addAccountHandler} onCloseForm={closeHandler} />
				)}
				{isEditing && (
					<EditAccount
						onCloseForm={() => setIsEditing(false)}
						account={editedAccount}
						onEditAccount={editAccountHandler}
					/>
				)}
			</div>
		</>
	);
}
