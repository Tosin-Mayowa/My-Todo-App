import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class NewForm extends Component {
    constructor(props){
        super(props);
        this.state={task:''};
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
handleChange({target}){
    const {value,name} =target;
this.setState({[name]:value});
}

handleSubmit(e){
    e.preventDefault();
    let newItem={...this.state,id:uuidv4()};
    this.props.addTodo(newItem);
    this.setState({task:''})
}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="task" value={this.state.task} onChange={this.handleChange}/>
            <button>save</button>
            
            </form>
        )
    }
}

export default NewForm;