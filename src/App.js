import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {

  componentDidMount () {
    // console.log(this.state);
  }

  render() {
    // let name = this.state.data[5]['lrc_name'];
    return (
      <div className="app">
        <h2>乐集</h2>
        <h3>凡音之起，由人心生也</h3>
        <p>音乐是不假任何外力，直接沁人心脾的最纯的感情的火焰；它是从口吸入的空气，它是生命的血管中流通着的血液。</p>
        <div className="container">

        </div>
        <List />
        <footer>
          <p>
            <span>&copy; {(new Date()).getFullYear()} </span>
            <a href="http://www.chunqiuyiyu.com">春秋一语</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
