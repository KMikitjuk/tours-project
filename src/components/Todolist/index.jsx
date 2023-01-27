import React, { useEffect, useState } from 'react';
import TodoService from '../../services/Todo.service';
import Todo from '../Todo';
import './style.css';

const Todolist = () => {
  const [todos, setTodos] = useState([]);
  const [todoTypes, setTodoTypes] = useState([]);
  const [selectedTodoType, setSelectedTodoType] = useState('All');

  useEffect(() => {
    const newTodoTypes = TodoService.getTodoTypes();
    setTodoTypes(newTodoTypes);
  }, []);

  useEffect(() => {
    const newTodos = TodoService.getTodos(selectedTodoType);
    setTodos(newTodos);
  }, [selectedTodoType]);

  const handleSelectTodoType = (e) => {
    setSelectedTodoType(e.target.value);
  };

  return (
    <div className="todolist">
      <select onChange={handleSelectTodoType}>
        <option value="All">All</option>
        {todoTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} title={todo.title} type={todo.type} />
      ))}
    </div>
  );
};

export default Todolist;
