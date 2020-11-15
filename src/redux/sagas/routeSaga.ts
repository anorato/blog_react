import {all, takeLatest} from 'redux-saga/effects';
import {FETCH_ALL_POSTS} from "../constants/post";
import {getPostsSaga} from "./post.saga";

export default function * rootSaga(){
    yield all([
        takeLatest(FETCH_ALL_POSTS, getPostsSaga)
    ]);
};
