import React from 'react';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import favoriteTodos from '../../store/FavoriteTodos';
import styles from './FavoritesLink.module.css';
// import NavBar from '../../components/Navbar';
import { ReactComponent as StarSVG } from './star.svg';

const FavoritesLink = () => {
  return (
    // // <Link to="/favorites" className={styles.root}>
    // <Link className="favoritesLink" to="/favorites">
    //   Favorites
    //   {/* <StarSVG className={styles.icon} /> */}
    //   {/* <div className={styles.countContainer}>{favoriteTodos.count}</div> */}
    // </Link>

    <Link to="/favorites" className={styles.root}>
      <StarSVG className={styles.icon} />
      <div className={styles.countContainer}>{favoriteTodos.count}</div>
    </Link>
  );
};

export default observer(FavoritesLink);