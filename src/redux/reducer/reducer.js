const initialState = {
    data: [],
    loading: true,
    picture: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_DATA_REQUEST':
            return {
                ...state,
                picture: [],
                loading: true
            };
        case 'FETCH_DATA_SUCCESS':
            return {
                ...state,
                data: [...state.data, ...action.payload],
                loading: false
            };
        case 'GET_PICTURE_ITEM':
            return {
                ...state,
                picture: action.payload,
                loading: false
            };
        default:
            return state;
    }
}

export default reducer;


