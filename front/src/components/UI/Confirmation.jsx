import classes from './Confirmation.module.css';

export default function Confirmation({ name, onDelete, onCancel }) {
	return (
		<div>
			<p>Are you sure to delete this {name} ?</p>
			<div className={classes.btns}>
				<button onClick={onDelete}>Confirm</button>
				<button onClick={onCancel}>Cancel</button>
			</div>
		</div>
	);
}
