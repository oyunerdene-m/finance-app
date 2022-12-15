export function getTotalIncome(transactions) {
	const totalIncome = transactions.reduce((acc, curr) => {
		if (curr.type === 'income') {
			return acc + parseInt(curr.amount);
		} else {
			return acc + 0;
		}
	}, 0);
	return totalIncome;
}

export function getTotalExpense(transactions) {
	const totalExpense = transactions.reduce((acc, curr) => {
		if (curr.type === 'expense') {
			return acc + parseInt(curr.amount);
		} else {
			return acc + 0;
		}
	}, 0);
	return totalExpense;
}

export function getBalance(accounts) {
	let totalEur = 0;
	let totalDollar = 0;
	let totalTugrug = 0;
	for (let el of accounts) {
		if (el.currency === '$') {
			totalDollar += parseInt(el.amount);
		} else if (el.currency === '₮') {
			totalTugrug += parseInt(el.amount);
		} else {
			totalEur += parseInt(el.amount);
		}
	}
	return { usd: totalDollar, eur: totalEur, mnt: totalTugrug };
}
