import React, { Component } from 'react'
import {connect} from 'react-redux'
import Todo from './Todo'

export class TodosContainer extends Component {
  renderTodos = () => this.props.todos.map((todo, i) => <Todo key={i} todo={todo} />)
  
  render() {
    console.log(this.renderTodos())
    return (
      <div>
        TodosContainer
        {this.renderTodos()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(TodosContainer)
