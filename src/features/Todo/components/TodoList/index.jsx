import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    TodoList: PropTypes.array,
};
TodoList.defaultProps = {
    TodoList: [],
};
function TodoList({ TodoList }) {

    return (
        <ul>
            {TodoList.map(todo => (
                <li key={todo.id}>{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;