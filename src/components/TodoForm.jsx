// import React, { useEffect, useState } from "react";
// import axios from 'axios';


// const API_URL = "http://localhost:8080/api/v1";

// const Todoform = () => {
//     const [text, setText] = useState('');
//     const [todos, setTodos] = useState([]);
//     const [editingTodoId, setEditingTodoId] = useState(null);
//     const [editingTodoText, setEditingTodoText] = useState('');

//     useEffect(() => {
//         fetchTodos();
//     }, []);

//     const fetchTodos = async () => {
//         try {
//             const res = await axios.get(`${API_URL}/todos`);
//             setTodos(res.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     // Add todo
//     const onFormSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`${API_URL}/todos`, {
//                 data: text,
//             });
//             console.log(res);
//             setTodos([...todos, res.data]);
//             setText('');
//         } catch (error) {
//             console.log(error);
//         }
//     }
//   //delete todo
//     const handleDeleteTodo = async (id) => {
//         try {
//             await axios.delete(`${API_URL}/todos/${id}`);
//             const updatedTodos = todos.filter(todo => todo._id !== id);
//             setTodos(updatedTodos);
//         } catch (error) {
//             console.log(error);
//         }
//     }
// //checkbox 
//     const handleCheckboxChange = async (id) => {
//         try {
//             const updatedTodos = todos.map(todo => {
//                 if (todo._id === id) {
//                     return {
//                         ...todo,
//                         done: !todo.done
//                     };
//                 }
//                return todo;
//             });

//             setTodos(updatedTodos);

//             await axios.put(`${API_URL}/todos/${id}`, {
//                 done: updatedTodos.find(todo => todo._id === id).done
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const handleEditClick = (todo) => {
//         setEditingTodoId(todo._id);
//         setEditingTodoText(todo.data);
//     }
//  //edit chamge
//     const handleEditSubmit = async (e, id) => {
//         e.preventDefault();
//         try {
//             await axios.put(`${API_URL}/updatetodos/${id}`, {
//                 data: editingTodoText
//             });
//             const updatedTodos = todos.map(todo => {
//                 if (todo._id === id) {
//                     return {
//                         ...todo,
//                         data: editingTodoText
//                     };
//                 }
//                 return todo;
//             });
//             setTodos(updatedTodos);
//             setEditingTodoId(null);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className="container">
//                {/* <AddTodo/> */}
//             <form className="form" onSubmit={onFormSubmit}>
//                 <input
//                     placeholder="Enter the task.."
//                     className="input"
//                     value={text}
//                     onChange={(e) => setText(e.target.value)}
//                 />
//                 <button className="button" type="submit">Add Todo</button>
//             </form>
//             <div className="todos-container">
//                 <ul className="todos-list">
//                     {todos.map(todo => (
//                         <li key={todo._id} className={`todo-item ${todo.done ? 'done' : ''}`}>
//                             <div className="todo-content">
//                                 <input
//                                     type="checkbox"
//                                     checked={todo.done}
//                                     onChange={() => handleCheckboxChange(todo._id)}
//                                     className="todo-checkbox"
//                                 />
//                                 {editingTodoId === todo._id ? (
//                                     <form onSubmit={(e) => handleEditSubmit(e, todo._id)}>
//                                         <input
//                                             value={editingTodoText}
//                                             onChange={(e) => setEditingTodoText(e.target.value)}
//                                             className="edit-input"
//                                         />
//                                         <button type="submit" className="save-button">Save</button>
//                                     </form>
//                                 ) : (
//                                     <span className="todo-text">{todo.data}</span>
//                                 )}
//                             </div>
//                             <div>
//                                 <button className="todo-actions edit-button" onClick={() => handleEditClick(todo)}>
//                                    Edit <span className="edit icon"></span>
//                                 </button>
//                                 <button className="todo-actions delete-button" onClick={() => handleDeleteTodo(todo._id)}>
//                                     Delete<span className="delete icon"></span>
//                                 </button>
//                             </div>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default Todoform;


// TodoForm.js
// TodoForm.js
// AddTodoForm.js
import React from 'react';

const TodoForm = ({ onFormSubmit, text, setText }) => {
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter the task.."
                className="input"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="button" type="submit">Add Todo</button>
        </form>
    );
}

export default TodoForm;

