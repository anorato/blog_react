import {DELETE_POST, FETCH_ALL_POSTS, SAVE_POSTS} from "../constants/post";
// @ts-ignore
import {Post} from "../../entities/Post";

export const getPostsActionCreator = () => {
    return {
        type: FETCH_ALL_POSTS
    }
};

export const savePostsActionCreator = (posts: Post[]) => {
    return {
        type: SAVE_POSTS,
        payload: {
            posts
        }
    }
};

export const deletePost = (id: number) => {
    return {
        type: DELETE_POST,
        payload: id
    }
};
