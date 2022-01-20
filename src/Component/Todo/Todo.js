import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
constructor(props){
    super(props);
    this.state={task:this.props.n.task,isClicked:false, isChecked:false};
    this.handleClick=this.handleClick.bind(this);
    this.handleEdit=this.handleEdit.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleChecked=this.handleChecked.bind(this);
    this.handleList=this.handleList.bind(this);
}

handleSubmit(e){
    e.preventDefault();
    this.props.update(this.props.n.id,this.state.task);
   this.setState({isClicked:false});
}

handleChange(e){
    this.setState({task:e.target.value})
}

handleClick(e){
    this.props.remove(this.props.n.id);
}

handleEdit(e){
this.setState({isClicked:true});
}
handleChecked(){
   this.setState({isChecked:true}); 
}

handleList(){
   this.setState({isChecked:false}); 
}

    render(){
    let result;
           if (this.state.isClicked) {
              result=(
                  <form onSubmit={this.handleSubmit}>
                  <input type="text" name="task" value={this.state.task} onChange={this.handleChange} />
                  <button>Enter</button>
                  </form>
                  )
            }else{
                
                result= ( <div className='Todo'>
             <li  onClick={this.handleList} className={this.state.isChecked?'Todo-btn':'Todo-List'}>{this.props.n.task}</li>
            <div>
            <button onClick={this.handleEdit}><i className="fas fa-pen" aria-hidden="true"></i></button>
              <button onClick={this.handleClick}><i className="fas fa-trash" aria-hidden="true"></i></button>
                <button onClick={this.handleChecked} ><i className="fa fa-check-circle" aria-hidden="true"></i></button>
            </div>
            </div>)
                
            }
            return result;
        
    }
}


export default Todo;