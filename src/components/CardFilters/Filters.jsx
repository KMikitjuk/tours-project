import React, { useState, useRef } from 'react';
import './CardFilters.css';

export const Filters = ({ item, index, onChange }) => {
  const [isClicked, setClick] = useState(false);
  const inputRef = useRef();

  return (
    <li key={index} onClick={() => setClick(!isClicked)} className="parameter">
      <div className="paramPosition">
        <div className="name">{item.label || item.name}</div>
        <i
          className={
            isClicked ? 'fa-solid fa-chevron-up' : 'fa-solid fa-angle-down'
          }
        ></i>
      </div>

      <div className={isClicked ? 'paramOptions active' : 'paramOptions'}>
        <input
          ref={inputRef}
          name={item.name}
          min={item.min}
          max={item.max}
          onChange={onChange}
          defaultValue={item.min}
          onClick={(e) => e.stopPropagation()}
          type={item.type}
        />
        {item.type === 'range' && <span>{inputRef.current?.value}</span>}
      </div>
    </li>
  );
};
