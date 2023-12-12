import { SET_TODO } from "../stores/types/constants"

export const setTodos = (todos) => ({
    type: SET_TODO,
    payload: todos
})