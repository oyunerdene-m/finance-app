import classes from './AccountForm.module.css';

export default function AccountForm({ onChangeInput, onSubmitForm, accountData, onCloseForm }) {
	const isEditing = accountData.name.length > 0;

	return (
		<form onSubmit={onSubmitForm} className={!isEditing ? classes.form : ''}>
			{!isEditing && (
				<span onClick={onCloseForm} className={classes.close}>
					X
				</span>
			)}

			<div>
				<label htmlFor='name'>Account name:</label>
				<input
					value={accountData.name}
					onChange={onChangeInput}
					type='text'
					id='name'
					name='name'
				/>
			</div>
			<div>
				<label htmlFor='amount'>Amount:</label>
				<input
					value={accountData.amount}
					onChange={onChangeInput}
					type='number'
					id='amount'
					name='amount'
				/>
			</div>
			<div>
				<label htmlFor='description'>Description:</label>
				<input
					value={accountData.description}
					onChange={onChangeInput}
					type='text'
					id='description'
					name='description'
				/>
			</div>
			<div>
				<label htmlFor='type'>Type:</label>
				<select value={accountData.type} onChange={onChangeInput} name='type' id='type'>
					<option value=''>Choose type</option>
					<option value='cash'>Cash</option>
					<option value='card'>Card</option>
					<option value='savings'>Savings</option>
					<option value='loan'>Loan</option>
					<option value='others'>Others</option>
				</select>
			</div>
			<div>
				<label htmlFor='currency'>Currency:</label>
				<select value={accountData.currency} onChange={onChangeInput} name='currency' id='currency'>
					<option value=''>Choose currency</option>
					<option value='€'>Euro</option>
					<option value='$'>Dollar</option>
					<option value='₮'>Tugrug</option>
				</select>
			</div>
			<div>
				<button>{isEditing ? 'Save' : 'Add Account'}</button>
			</div>
		</form>
	);
}
