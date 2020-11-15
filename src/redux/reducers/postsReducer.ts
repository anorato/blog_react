import {DELETE_POST, SAVE_POSTS} from "../constants/post";

const reducerDefaultState = [];

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case SAVE_POSTS:
            return {
                ...state, data: action.payload.posts
            };
        case DELETE_POST:
            const posts = state.data.filter((post)=>{
               return post.id !== action.payload;
            });
            return {
                data: posts
            };
        default:
            return state;
    }
};

