import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/stores/index'
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import PostsList from './components/PostsList/PostsList';
import TodoList from './components/TodoList/TodoList';
import UserList from './components/UserList/UserList';
import UserDetails from './components/UserDetails/UserDetails';


import './App.css';

const App = () => {
   return (
   <Provider store={store}>
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetails />} />
          
        </Routes>
      </div>
   </Router>
   </Provider>
  );
}

export default App;
