import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../redux/reducer/reducer';
import rootSaga from '../redux/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

store.subscribe(() => console.log(store.getState()))

sagaMiddleware.run(rootSaga);

export default store;
