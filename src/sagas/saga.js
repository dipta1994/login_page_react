import { delay } from "redux-saga/effects";
import { takeLatest, put } from "redux-saga/effects";

function* numupasync() {
    yield delay(4000);
    yield put({ type: "NUMBER_UP_ASYNC", value: 1 });
}

export function* watchnumup() {
    yield takeLatest("NUM_UP", numupasync);
}