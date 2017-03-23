import { fork, take, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
  sample,
  afterSample,
} from '../actions';

const x = undefined;

function* sampleSaga() {
  while (typeof x === 'undefined') {
    yield take(`${sample}`);
    yield delay(100);
    yield put(afterSample({sample: {x: Math.random() * 100 + 50, y: Math.random() * 100 + 50} }));
  }
}

export default function* rootSaga() {
  yield fork(sampleSaga);
}
