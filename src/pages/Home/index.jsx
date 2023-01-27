import React from 'react';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.linksContainer}>
      <Link to={'/todos'}>Show todos</Link>
    </div>
  );
};

export default HomePage;
