import axios from 'axios';
import { takeEvery, put, call, fork, all } from 'redux-saga/effects'


async function getData(a = 0) {
    const request = await axios.get(`https://jsonplaceholder.typicode.com/photos?_start=${a}&_limit=24`);
    return request.data;
}

function* initialFetchRequest() {
    yield put({ type: 'FETCH_DATA_REQUEST' });
    const data = yield call(getData);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
};


function* changeData(action) {

    yield put({ type: 'FETCH_DATA_REQUEST' });

    const data = yield call(getData, action.payload);
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
};



export default function* watcherSaga() {
    yield all([
        fork(initialFetchRequest)
    ]);

    yield takeEvery('CHANGE_DATA', changeData)
};



