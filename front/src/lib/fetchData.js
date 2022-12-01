export default async function fetchData(url, method, body) {
	const response = await fetch(url, {
		method: method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});

	if (!response.ok) {
		const message = `Error occured in ${response.status}`;
		throw new Error(message);
	}
	const jsonRes = await response.json();

	if (jsonRes.error) {
		throw new Error(jsonRes.error);
	} else {
		return jsonRes.data;
	}
}
