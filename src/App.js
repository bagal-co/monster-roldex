import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/card_list.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  render(){
    const { monsters, searchField } = this.state;
    const filterdMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <input type="search" placeholder="Search Monsters" onChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filterdMonster}/>  
      </div>
    );
  }
}

export default App;
