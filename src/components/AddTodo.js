import React, {Component} from 'react';

class AddTodo extends Component  {
  state = {
      title: ''
  }

  onChange = (evt) => this.setState({[evt.target.name]: evt.target.value});

  onSubmit = (evt) => {
    evt.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({title: ''});
  }

  render() {
        return (
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    style={{flex: '10'}} 
                    placeholder="App todo.."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}}
                />   
            </form>
        );
  }

}

export default AddTodo;