import { Link } from 'react-router-dom';

export default function TransactionItem(props) {
	const { id, date, category, type, from, to, amount, description } = props.transaction;
	return (
		<li className='flex mb-2 p-2 rounded odd:bg-double-light-blue shadow-xl  items-center'>
			<div className='text-left  w-3/12 '>
				<p>{date}</p>
				<p>{category}</p>
				<p className='text-sm'>/{type}/</p>
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
					<span className='text-sm'>description: </span>
					{description}
				</p>
			</div>
			<div className='text-left  w-2/12 '> € {amount}</div>

			<div className='text-center  w-1/12'>
				<Link to={`/transactions/edit/${id}`}>
					<button className='mr-2 text-xs bg-transparent hover:bg-light-purple text-blue-700 font-semibold hover:text-white py-1 px-2 border hover:border-transparent rounded'>
						edit
					</button>
				</Link>
			</div>
		</li>
	);
}
