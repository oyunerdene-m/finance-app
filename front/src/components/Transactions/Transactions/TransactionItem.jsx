import classes from './TransactionItem.module.css';

export default function TransactionItem(props) {
	const { date, category, type, from, to, amount, description } = props.transaction;

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
			</li>
		</div>
	);
}
