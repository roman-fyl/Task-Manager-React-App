import { SET_USERS } from "../stores/types/constants"

export const setUsers = (users) => ({
    type: SET_USERS,
    payload: users
})