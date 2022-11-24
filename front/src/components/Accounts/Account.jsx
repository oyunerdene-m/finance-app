import classes from './Account.module.css';

export default function Account(props) {
	const { name, type, amount, currency, description, id } = props.account;

	function clickHandler(id) {
		props.onDeleting();
		props.onDelete(id);
	}
	return (
		<li className={classes.account}>
			<h4>
				{name} - {type}
			</h4>
			<p>
				balance: {currency}
				{amount}{' '}
			</p>
			<p style={{ fontStyle: 'italic' }}>description: {description}</p>
			<button onClick={() => props.onEditing(id)}>edit</button>
			<button onClick={() => clickHandler(id)}>delete</button>
		</li>
	);
}
