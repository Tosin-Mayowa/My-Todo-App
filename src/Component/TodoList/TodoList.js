import React, { Component } from 'react';
import './TodoList.css';
import Todo from '../Todo/Todo';
import NewForm from '../NewForm/NewForm';

class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[]
        };
        this.addTodo=this.addTodo.bind(this);
        this.remove=this.remove.bind(this);
        this.update=this.update.bind(this);
    }

addTodo(item){
this.setState(st=>
    ({
    todos:[...st.todos,item]
}))
}

remove(id){
    this.setState(st=>
        ({todos: st.todos.filter(n=>n.id!==id)}
    ))
}

update(id,item){
const updatedTask=this.state.todos.map(n=>{
    if(n.id===id){
        return {...n,task:item}
    }else{
        return n;
    }
});
this.setState({todos:updatedTask})
}
    render(){
        return(
            <div className='TodoList'>
            <ul className='TodoList-Parent'>
            {this.state.todos.map(n=><Todo n={n} key={n.id} remove={this.remove} update={this.update}/>)}
            </ul>
            <NewForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default TodoList;