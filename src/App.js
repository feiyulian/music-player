import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Lrc from './Lrc';
const list = require('../public/list.json');

let index = 0;
class App extends Component {
  setTime (e) {
    this.setState({
      time: this.refs.audio.currentTime
    });
  }

  nextMusic () {
    index++;
    this.setState({
      time: 0,
      index: index,
    });
  }

  render() {
    let tmp = list.data;
    // play music in order
    if (index > tmp.length - 1) {
      index = 0;
    }
    const name = tmp[index].lrc_name;
    const music = 'musics/' + name + '.mp3';
    const lrc = 'musics/' + name + '.lrc';

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Music Colletion</h2>
          <audio autoPlay controls src={music} onTimeUpdate={this.setTime.bind(this)} onEnded={this.nextMusic.bind(this)} ref="audio"></audio>
        </div>
        <Lrc lrc={lrc} time={this.state ? this.state.time : 0} index={this.state ? this.state.index : 0}/>
      </div>
    );
  }
}

export default App;
