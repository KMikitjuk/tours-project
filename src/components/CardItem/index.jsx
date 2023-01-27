import React, { useState, useMemo } from 'react';
import { CARD_ITEMS } from './CardItems';
import { Link } from 'react-router-dom';
import './Cards.css';
import { CardFilters } from '../CardFilters';

const Cards = () => {
  const [filters, setFilters] = useState({});

  const filteredItems = useMemo(
    () =>
      CARD_ITEMS.filter((item) => {
        if (filters.price) {
          return item.price >= filters.price;
        }
        return true;
      }),
    [filters]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: parseInt(value) });
  };

  return (
    <div className="cards">
      <div className="container">
        <CardFilters onChange={handleChange}></CardFilters>
        <ul className="cardsItems">
          {filteredItems.map((item, index) => {
            return (
              <li className="oneItem" key={index}>
                <Link className="cardItemLink" to={item.link}>
                  <figure
                    className="cardItemPicWrap"
                    data-category={item.label}
                  >
                    <img className="cardItemImg" src={item.url} alt="Travel" />
                  </figure>
                  <div className="cardItemInfo">{item.title}</div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Cards;
