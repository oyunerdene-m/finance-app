export default function Confirmation({ name, onDelete, onCancel }) {
	return (
		<div>
			<p>Are you sure to delete this {name} ?</p>
			<svg
				onClick={onCancel}
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth={1.5}
				stroke='currentColor'
				className='w-5 h-5 absolute top-1 right-1 cursor-pointer'
			>
				<path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
			</svg>

			<div className='cursor-pointer mt-3'>
				<button
					className='mr-2 text-xs bg-transparent hover:bg-light-gray text-blue-700 font-semibold hover:text-dark-blue py-1 px-2 border  hover:border-transparent rounded'
					onClick={onDelete}
				>
					Confirm
				</button>
				<button
					className='text-xs bg-transparent hover:bg-light-gray text-blue-700 font-semibold hover:text-dark-blue py-1 px-2 border border-blue-500 hover:border-transparent rounded'
					onClick={onCancel}
				>
					Cancel
				</button>
			</div>
		</div>
	);
}
