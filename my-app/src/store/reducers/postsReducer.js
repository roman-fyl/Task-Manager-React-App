
const initialState = [];

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_POST":
            return action.payload;
        default: return state;
    }
}

export default postsReducer;