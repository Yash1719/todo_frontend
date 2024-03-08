import React, { useEffect, useState } from "react";
import axios from 'axios';
import TodoItem from './TodoItem';
import AddTodoForm from './TodoForm';

const API_URL = "https://todo-backend-2em2.onrender.com/api/v1"; 

const Todoform = () => {
    const [text, setText] = useState('');
    const [todos, setTodos] = useState([]);
    const [editingTodoId, setEditingTodoId] = useState(null);
    const [editingTodoText, setEditingTodoText] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const res = await axios.get(`${API_URL}/todos`);
            setTodos(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${API_URL}/todos`, {
                data: text,
            });
            console.log(res);
            setTodos([...todos, res.data]);
            setText('');
        } catch (error) {
            console.log(error);
        }
    }

    const handleDeleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/todos/${id}`);
            const updatedTodos = todos.filter(todo => todo._id !== id);
            setTodos(updatedTodos);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckboxChange = async (id) => {
        try {
            const updatedTodos = todos.map(todo => {
                if (todo._id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                return todo;
            });

            setTodos(updatedTodos);

            await axios.put(`${API_URL}/todos/${id}`, {
                done: updatedTodos.find(todo => todo._id === id).done
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEditClick = (todo) => {
        setEditingTodoId(todo._id);
        setEditingTodoText(todo.data);
    }

    const handleEditSubmit = async (e, id) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/updatetodos/${id}`, {
                data: editingTodoText
            });
            const updatedTodos = todos.map(todo => {
                if (todo._id === id) {
                    return {
                        ...todo,
                        data: editingTodoText
                    };
                }
                return todo;
            });
            setTodos(updatedTodos);
            setEditingTodoId(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <AddTodoForm onFormSubmit={onFormSubmit} text={text} setText={setText} />
            <div className="todos-container">
                <ul className="todos-list">
                    {todos.map(todo => (
                        <TodoItem
                            key={todo._id}
                            todo={todo}
                            handleCheckboxChange={handleCheckboxChange}
                            handleEditClick={handleEditClick}
                            handleDeleteTodo={handleDeleteTodo}
                            editingTodoId={editingTodoId}
                            editingTodoText={editingTodoText}
                            handleEditSubmit={handleEditSubmit}
                            setEditingTodoText={setEditingTodoText}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Todoform;

