export default function (state = [], action = {}) {
    switch (action.type) {
        case 'POPULAR_MOVIES_PENDING':
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case 'POPULAR_MOVIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.results,
                error: false,
            };

        case 'POPULAR_MOVIES_REJECTED':
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