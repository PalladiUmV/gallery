import axios from 'axios';
import { takeEvery, put, call, fork, all } from 'redux-saga/effects'


async function getData(a = 0, b = 24) {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${a}&_limit=${b}`);
    return request.data;
}

function* initialFetchRequest() {
    yield put({ type: 'FETCH_DATA_REQUEST' });
    const data = yield call(getData);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
};


function* changeData(action) {

    yield put({ type: 'FETCH_DATA_REQUEST' });

    const data = yield call(getData, action.payload, 1);
    yield put({ type: 'GET_PICTURE_ITEM', payload: data });
};



export default function* watcherSaga() {
    yield all([
        fork(initialFetchRequest)
    ]);

    yield takeEvery('GET_PICTURE', changeData)
};



