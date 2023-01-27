import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import TodoService from '../../services/Todo.service';
import favoriteTodos from '../../store/FavoriteTodos';
import styles from './Todo.module.css';

const TodoPage = () => {
  const params = useParams();
  const [todo, setTodo] = useState({});

  useEffect(() => {
    const todo = TodoService.getTodoById(params.todoId);
    setTodo(todo);
  }, [params.todoId]);

  const handleAddToFavorite = () => {
    favoriteTodos.add(todo);
  };

  return (
    <div>
      <div className={styles.header}>Todo {params.todoId} page</div>
      {todo.id && (
        <div className={styles.todoContainer}>
          <p>Type: {todo.type}</p>
          <p>Title: {todo.title}</p>
          <button style={{ cursor: 'pointer' }} onClick={handleAddToFavorite}>
            Add to favorite
          </button>
          <Link to="/todos">Back</Link>
        </div>
      )}
    </div>
  );
};

export default TodoPage;
