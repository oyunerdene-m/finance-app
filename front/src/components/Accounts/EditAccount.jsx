import { useState } from 'react';
import AccountForm from './NewAccount/AccountForm';

export default function EditAccount({ account, onEditAccount, onCloseForm }) {
	const [editedAccount, setEditedAccount] = useState({
		name: account.name,
		amount: account.amount,
		description: account.description,
		type: account.type,
		currency: account.currency,
	});

	function changeHandler(event) {
		const { name, value } = event.target;
		setEditedAccount((prevAccountData) => {
			return {
				...prevAccountData,
				[name]: value,
			};
		});
	}
	function submitHandler(e) {
		e.preventDefault();
		onEditAccount(account.id, editedAccount);
	}

	return (
		// <Modal onCancel={onCancel}>

		<div>
			<AccountForm
				onCloseForm={onCloseForm}
				onChangeInput={changeHandler}
				onSubmitForm={submitHandler}
				accountData={editedAccount}
			/>
		</div>
		// </Modal>
	);
}
