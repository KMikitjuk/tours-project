import React from 'react';
import './CardFilters.css';
import { PARAMETER_ITEMS } from './ParameterItems.js';
import { Filters } from './Filters.jsx';

export const CardFilters = ({ onChange }) => {
  return (
    <ul className="allParameters">
      Filters
      {PARAMETER_ITEMS.map((item, index) => {
        return (
          <Filters key={index} item={item} index={index} onChange={onChange} />
        );
      })}
    </ul>
  );
};
