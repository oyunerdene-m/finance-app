export function getLastTransactions(transactions) {
	return transactions.slice(0, 3);
}

export function getSortedTransactions(transactions) {
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

	return transactions;
}
