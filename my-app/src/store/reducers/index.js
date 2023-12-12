import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import todosReducer from "./todosReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    todos: todosReducer,
    users: usersReducer,
  });
  
  export default rootReducer;