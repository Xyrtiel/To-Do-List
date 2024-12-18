import React, { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapperLocalStorage = () => {
    
    const [todos, setTodos] = useState([]);

    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(savedTodos);
    }, []);

    // Ajouter un todo
    const addTodo = (todo) => {
        const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));  
    };

    // Basculer l'état de complétion d'un todo
    const toggleComplete = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));  
    };

    // Supprimer un todo
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));  
    };

    // Modifier l'état d'édition d'un todo
    const editTodo = (id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));  
    };

    // Mettre à jour la tâche d'un todo (édition)
    const editTask = (task, id) => {
        const newTodos = todos.map(todo =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
        );
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));  
    };

    return (
        <div className="TodoWrapper">
            <h1>Get Things Done!</h1>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
                ) : (
                    <Todo
                        key={todo.id}
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                    />
                )
            ))}
        </div>
    );
};
