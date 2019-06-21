export default function (state = [], action = {}) {
	console.log('111111', action)
	switch (action.type) {
		case 'TRENDING_MOVIES_PENDING':
			return {
				...state,
				isLoading: true,
				error: false,
			};

		case 'TRENDING_MOVIES_FULFILLED':
			return {
				...state,
				isLoading: false,
				data: action.payload.data.results,
				error: false,
			};

		case 'TRENDING_MOVIES_REJECTED':
			return {
				...state,
				isLoading: false,
				error: true,
			};

		default:
			return {
				...state,
			};
	}
}