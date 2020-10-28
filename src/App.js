import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/card_list.component';
import { SearchBox } from './components/search_box/search.component';

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

  onChangeHandler = (e) =>{
    this.setState({searchField: e.target.value})
  }
  render(){
    const { monsters, searchField } = this.state;
    const filterdMonster = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>MONSTER ROLDEX</h1>
        <SearchBox 
        placeholder="Search Monster" 
        onChangeHandler={this.onChangeHandler}
        />
        <CardList monsters={filterdMonster}/>  
      </div>
    );
  }
}

export default App;
