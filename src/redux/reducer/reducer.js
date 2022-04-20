const initialState = {
    data: [],
    loading: true,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                loading: true
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;


