import React, { Component } from 'react';
import './List.css';
import list from '../public/list.json';

class List extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  componentDidMount() {

  }

  setCurrent(e) {
    this.setState({
      index: e.currentTarget.children[1].innerText - 1
    });
  }

  setNext(e) {
    let index = this.state.index;
    index++;
    this.setState({
      index
    });
  }

  render() {
    return (
      <div>
        <audio src={`musics/${list.data[this.state.index].lrc_name}.mp3`} onEnded={this.setNext.bind(this)} autoPlay></audio>
        <ol>
          {
            list.data.map((item, i) => {
              return (
                <li key={i}  onClick={this.setCurrent.bind(this)} className={i === this.state.index ? 'is-playing' : ''}>
                  <span className="current" style={{display: i === this.state.index ? 'block' : ''}}></span>
                  <span className="index">{i+1}</span>
                  <span className="title">{item.song_name}</span>
                  <span className="artist">{item.artist}</span>
                </li>
                )
            })
          }
        </ol>
      </div>
    );
  }
}

export default List;
