export default function Modal(props) {
	return (
		<>
			<div
				className='fixed top-0 left-0 w-full h-screen z-1 backdrop-contrast-75'
				onClick={props.onCancel}
			/>
			<div className='absolute w-3/5 lg:w-2/5 xl:w-1/5 z-100 overflow-hidden bg-light-blue px-4 py-5 text-light-gray rounded-md'>
				{props.children}
			</div>
		</>
	);
}
