import classes from './TransactionItem.module.css';
import { Link } from 'react-router-dom';

export default function TransactionItem(props) {
	const { id, date, category, type, from, to, amount, description } = props.transaction;
	const { onDelete } = props;
	console.log('froom item', type);
	return (
		<div className={classes.transaction}>
			<li>
				<div>
					{date}-{category}
				</div>
				<div>
					{type === 'transfer' ? (
						<span style={{ fontWeight: 'bold' }}>{`${from} -> ${to}`}</span>
					) : (
						<>
							<span style={{ fontWeight: 'bold' }}>{from}</span>
							<span style={{ fontWeight: 'bold' }}>{to}</span>
						</>
					)}

					<p>description: {description}</p>
				</div>
				<div> € {amount}</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<Link to={`/transactions/edit/${id}`}>
						<button style={{ margin: '10px' }}>edit</button>
					</Link>
					<button
						onClick={() => {
							onDelete(id);
						}}
					>
						delete
					</button>
				</div>
			</li>
		</div>
	);
}
