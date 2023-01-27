import React from 'react';
import { Link } from 'react-router-dom';
import SocialNetworks from '../SocialNetworks';
import FooterSCSS from './Footer.module.scss';
import { FOOTER_INFO } from './FooterInfo';

function Footer() {
  return (
    <div className={FooterSCSS.cover}>
      <ul className={FooterSCSS.coverColumns}>
        <li>
          <SocialNetworks isRow={true}></SocialNetworks>
        </li>
        {FOOTER_INFO.map((item, index) => {
          return (
            <li key={item.columnName} className={FooterSCSS.bottomText}>
              <p>{item.columnName}</p>
              <div className={FooterSCSS.links}>
                <Link to={item.url1}>{item.columnItem1}</Link>

                <a>{item.columnItem2}</a>

                <a>{item.columnItem3}</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Footer;
