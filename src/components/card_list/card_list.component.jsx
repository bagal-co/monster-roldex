import React from 'react';
import { Card } from '../card/card.component';
import './card_list.style.css';

export const CardList = (props) =>{
  <div className="cardList_wrapper">
    {
      props.monsters.map((monster) =>{
      < Card key={monster.id} monsters={monsters} />
      })
    }
  </div>
}

//<h2 key={monster.id}>{monster.name}</h2>