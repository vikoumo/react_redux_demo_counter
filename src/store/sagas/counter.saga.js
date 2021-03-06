import { takeEvery, put, delay } from 'redux-saga/effects';
import { increment } from '../actions/counter.actions';
import { INCREMENT_ASYNC } from '../const/counter.const';

// takeEvery 接收 action
// put 触发 action

function* increment_async_fn (action) {
  console.log('saga increment_async_fn aciton', action);
  yield delay(1000);
  yield put(increment(action.payload))
}

export default function* counterSaga () {
  // 接收action
  yield takeEvery(INCREMENT_ASYNC, increment_async_fn)
}