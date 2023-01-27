import React from 'react';
import styles from './SocialNetworks.module.scss';
import { SOCIAL_NETWORKS_INFO } from './SocialNetworksInfo.js';

export function SocialNetworks({ isRow }) {
  console.log(styles);
  return (
    <div className={isRow ? styles.row : styles.column}>
      <ul>
        {SOCIAL_NETWORKS_INFO.map((item, index) => {
          return (
            <a key={item.url} href={item.url} target="_blank" rel="noreferrer">
              <li>
                <div className={item.iconClass}></div>
              </li>
            </a>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialNetworks;
