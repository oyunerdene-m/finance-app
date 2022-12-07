import { Link } from 'react-router-dom';

export default function TransactionItem(props) {
	const { id, date, category, type, from, to, amount, description } = props.transaction;
	return (
		<li className='flex mb-2 p-2 rounded odd:bg-double-light-blue shadow-xl items-center'>
			<div className='text-left  w-3/12 '>
				<p>{date}</p>
				<p>{category}</p>
				<p className='text-sm font-medium'>
					<i>{type}</i>
				</p>
			</div>
			<div className='text-left  w-6/12 '>
				{type === 'transfer' ? (
					<span>{`${from} -> ${to}`}</span>
				) : (
					<>
						<span>{from}</span>
						<span>{to}</span>
					</>
				)}

				<p>
					<i className='text-sm'>description: </i>
					{description}
				</p>
			</div>
			<div className='w-3/12 text-right'>
				<div>
					<i className='text-sm mb-2 inline-block'>amount: </i> €{amount}
				</div>

				<div>
					<Link to={`/transactions/edit/${id}`}>
						<button className='text-xs bg-transparent hover:bg-light-purple text-blue-700 font-semibold hover:text-white py-0.5 px-1.5 border hover:border-transparent rounded'>
							edit
						</button>
					</Link>
				</div>
			</div>
		</li>
	);
}
