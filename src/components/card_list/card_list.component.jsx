import React from 'react';
import './card_list.style.css';

export const CardList = (props) =>{
  <div className="card_list_wrapper">
    {props.monsters.map(monster =>(
      <h1 key={monster.id}>{monster.name}</h1>
    ))}
  </div>
}

 