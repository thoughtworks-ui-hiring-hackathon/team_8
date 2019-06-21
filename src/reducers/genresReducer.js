export default function (state = [], action = {}) {
    switch (action.type) {
        case 'GENRES_PENDING':
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case 'GENRES_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                error: false,
            };

        case 'GENRES_REJECTED':
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