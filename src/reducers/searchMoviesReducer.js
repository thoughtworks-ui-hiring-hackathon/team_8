export default function (state = [], action = {}) {
    switch (action.type) {
        case 'SEARCH_MOVIES_PENDING':
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case 'SEARCH_MOVIES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                error: false,
            };

        case 'SEARCH_MOVIES_REJECTED':
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