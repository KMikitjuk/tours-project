import React from 'react';
import styles from './Favorites.module.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import favoriteTodos from '../../store/FavoriteTodos';
import Todo from '../../components/Todo';

const FavoritesPage = () => {
  return (
    <div>
      <div className={styles.header}>Favorites page</div>
      <div className={styles.linksContainer}>
        <Link to={'/'}>Home</Link>
      </div>
      <div className={styles.todosContainer}>
        {favoriteTodos.list.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            type={item.type}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default observer(FavoritesPage);
