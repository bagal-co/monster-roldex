import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card_list/card_list.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => this.setState({ monsters: data }));
  }

  render(){
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
