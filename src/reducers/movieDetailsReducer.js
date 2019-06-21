export default function (state = [], action = {}) {
    switch (action.type) {
        case 'MOVIE_DETAILS_PENDING':
            return {
                ...state,
                isLoading: true,
                error: false,
            };

        case 'MOVIE_DETAILS_FULFILLED':
            return {
                ...state,
                isLoading: false,
                data: action.payload.data,
                error: false,
            };

        case 'MOVIE_DETAILS_REJECTED':
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