import classes from './TransactionForm.module.css';

export default function Expense() {
	return (
		<div className={classes.transfer}>
			<h3>Expense</h3>
			<form>
				<div>
					<label htmlFor='date'>Date: </label>
					<input type='date' name='date' id='date' />
				</div>
				<div>
					<label htmlFor='account'>Account: </label>
					<input type='text' name='account' id='accoount' />
				</div>
				<div>
					<label htmlFor='category'>Category: </label>
					<input type='text' name='category' id='category' />
				</div>
				<div>
					<label htmlFor='amount'>Amount: </label>
					<input type='number' name='amount' id='amount' />
				</div>
				<div>
					<label htmlFor='description'>Description: </label>
					<input type='text' name='description' id='description' />
				</div>
				<div>
					<button>Save</button>
					<a href=''>continue</a>
				</div>
			</form>
		</div>
	);
}
