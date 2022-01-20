import React, { Component } from 'react';
import TodoList from './Component/TodoList/TodoList';
import './App.css';
class App extends Component{


  render(){
    return(
      <div className='App'>
      <h1 className='App-heading'>My Todo List</h1>
      <hr className='App-hr'/>
      <TodoList />
      </div>
    )
  }
}


export default App;
