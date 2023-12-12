
const initialState = [];

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_TODO":
            return action.payload;
        default: return state;
    }
}

export default todosReducer;