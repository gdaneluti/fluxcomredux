import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/actions/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}{' '}
          <button type="button" onClick={() => removeTodo(todo.id)}>
            Remover
          </button>
        </li>
      ))}
    </ul>
    <button type="button" onClick={() => addTodo('Novo Todo')}>
      Adicionar
    </button>
  </Fragment>
);

TodoList.propTypes = {
  removeTodo: PropTypes.func.isRequired,
  addTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
    }).isRequired,
  ),
};
const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);