import React from 'react';
import styles from './Todo.module.css';
import { Link } from 'react-router-dom';

const Todo = ({ title, type, id }) => {
  return (
    <Link className={styles.root} to={`/todos/${id}`}>
      <p>Type: {type}</p>
      <p className={styles.title}>{title}</p>
    </Link>
  );
};

export default Todo;
