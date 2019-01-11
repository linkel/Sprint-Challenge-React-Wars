import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      prev: '',
      next: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data)
        this.setState({ starwarsChars: data.results });
        this.setState({ prev: data.previous});
        this.setState({ next: data.next})
        this.setState({ loading : false});
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  next = () => {
    this.getCharacters(this.state.next);
    this.setState({loading: true});
  }

  prev = () => {
    this.getCharacters(this.state.prev);
    this.setState({loading: true});
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        { this.state.loading ? <div className='loader'></div> :
        <div className='loader-notmove'></div> }
        { this.state.prev ? <button onClick={this.prev}>Previous Page</button> : <div></div> } <button onClick={this.next}>Next Page</button>
        <CharacterList list={this.state.starwarsChars}/>
      </div>
    );
  }
}



export default App;
