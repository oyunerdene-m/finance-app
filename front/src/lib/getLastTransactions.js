export default function getLastTransactions(transactions) {
	transactions.sort((a, b) => {
		const first = a.date.indexOf('-');
		const second = a.date.lastIndexOf('-');

		const aDate = new Date(
			a.date.substring(0, first),
			a.date.substring(first + 1, second),
			a.date.substring(second + 1),
		);
		const bDate = new Date(
			b.date.substring(0, first),
			b.date.substring(first + 1, second),
			b.date.substring(second + 1),
		);
		return bDate - aDate;
	});

	const res = [];
	let count = 0;
	for (let el of transactions) {
		if (el) {
			res.push(el);
			count++;
			if (count === 3) {
				break;
			}
		} else {
			break;
		}
	}
	return res;
}
