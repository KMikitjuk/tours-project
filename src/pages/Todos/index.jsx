import React from 'react';
import Todolist from '../../components/Todolist';
import styles from './Todos.module.css';

const TodosPage = () => {
  return (
    <div>
      <div className={styles.header}>Todos page</div>
      <Todolist />
    </div>
  );
};

export default TodosPage;
