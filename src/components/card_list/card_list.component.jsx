import React from 'react';
import { Card } from '../card/card.component';
import './card_list.style.css';

export const CardList = (props) =>{
  return (
    <div className="cardList_container">
    {props.monsters.map(monster =>(
      <Card key={monster.id} monster={monster}/>
    ))}
  </div>
  )
};

