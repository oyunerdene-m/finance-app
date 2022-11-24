import classes from './Modal.module.css';

export default function Modal(props) {
	return (
		<>
			<div className={classes.backdrop} onClick={props.onCancel} />
			<div className={classes.modal}>{props.children}</div>
		</>
	);
}
