import React, { Component } from 'react';
import './App.css';
import './ResList1.css';
import './ResList2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurants from './components/Restaurants.js';
import Header from './components/layouts/Header.js';
import Introduction from './components/Intro_filter/Introduction.js';
import Filter from './components/Intro_filter/Filter.js';

class App extends Component {
  state = {
    contentView: "gridView",
    contentSort: "default",
    rtrs: []
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/woltapp/summer2020/master/restaurants.json')
      .then( res => res.json() )
      .then( res => this.setState({ rtrs: res.restaurants }) )
  }

  //Sort and filter
  list_list = () => {
    this.setState({ contentView: "listView" })
  }

  list_grid = () => {
    this.setState({ contentView: "gridView" })
  }

  list_new = () => {
    this.setState({ contentSort: "default" })
  }
  list_asc = () => {
    this.setState({ contentSort: "asc" })
  }

  list_desc = () => {
    this.setState({ contentSort: "desc" })
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Header />
          <div className="container">
            <Introduction />
            <Filter
              list_list = { this.list_list }
              list_grid = { this.list_grid }
              list_new = { this.list_new }
              list_asc = { this.list_asc }
              list_desc = { this.list_desc }
            />
            <div className="list-restaurants-container">
                <Restaurants 
                  rtrs = { this.state.rtrs }
                  contentView = { this.state.contentView }
                  contentSort = { this.state.contentSort }
                />
            </div>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
