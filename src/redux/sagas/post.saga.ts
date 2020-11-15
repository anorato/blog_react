import {call, put} from 'redux-saga/effects'
import postService from "../../services/postService";
import {savePostsActionCreator} from "../actions/postActions";

export function * getPostsSaga() {
    const postsResponse = yield call(postService.getPosts);
    yield put(savePostsActionCreator(postsResponse.data));
}


