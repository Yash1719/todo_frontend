// TodoItem.js
import React from 'react';

const TodoItem = ({todo, handleCheckboxChange, handleEditClick, handleDeleteTodo, editingTodoId, editingTodoText, handleEditSubmit, setEditingTodoText}) => {
    return (
        <li key={todo._id} className={`todo-item ${todo.done ? 'done' : ''}`}>
            <div className="todo-content">
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => handleCheckboxChange(todo._id)}
                    className="todo-checkbox"
                />
                {editingTodoId === todo._id ? (
                    <form onSubmit={(e) => handleEditSubmit(e, todo._id)}>
                        <input
                            value={editingTodoText}
                            onChange={(e) => setEditingTodoText(e.target.value)}
                            className="edit-input"
                        />
                        <button type="submit" className="save-button">Save</button>
                    </form>
                ) : (
                    <span className="todo-text">{todo.data}</span>
                )}
            </div>
            <div>
                <button className="todo-actions edit-button" onClick={() => handleEditClick(todo)}>
                    Edit <span className="edit icon"></span>
                </button>
                <button className="todo-actions delete-button" onClick={() => handleDeleteTodo(todo._id)}>
                    Delete<span className="delete icon"></span>
                </button>
            </div>
        </li>
    );
}

export default TodoItem;
