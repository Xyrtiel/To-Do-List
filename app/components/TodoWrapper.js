'use client';

import React, { useState, useEffect } from "react";
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(savedTodos);
  }, []);

  const addTodo = (todo) => {
    const newTodos = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    showMessage("Tâche ajoutée et enregistrée !");
  };

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    showMessage("Tâche supprimée et enregistrée !");
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    showMessage("Tâche modifiée et enregistrée !");
  };

  const editTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    showMessage("Édition de la tâche sauvegardée !");
  };

  const editTask = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
    showMessage("Tâche modifiée et enregistrée !");
  };

  const showMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage('');
    }, 3000); 
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!</h1>
      <TodoForm addTodo={addTodo} />
      
      {message && <div className="success-message">{message}</div>}

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm
            key={todo.id}
            editTodo={editTask}
            task={todo}
          />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
