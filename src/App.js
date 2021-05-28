
import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component'
import './App.css';





export default class App extends Component {

  state = {
      monsters:[],
      searchField: ''
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  onSearchChange = event => {
    this.setState({searchField: event.target.value})
  }

  render() { 
    const { monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.onSearchChange}
        />
        <CardList monsters={filteredMonsters} />        
      </div>
    );
  }
}
