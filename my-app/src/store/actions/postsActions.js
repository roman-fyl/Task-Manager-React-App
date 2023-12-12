import { SET_POST } from "../stores/types/constants"

export const setPosts = (posts) => ({
    type: SET_POST,
    payload: posts
})