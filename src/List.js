import React, { Component } from 'react';
import './List.css';
import json from '../public/list.json';

class List extends Component {
  constructor() {
    super();
    this.state = {
      index: 0
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      index: nextProps.index
    });
  }

  setCurrent(e) {
    let index = e.currentTarget.children[1].innerText - 1;
    this.props.callbackParent(index);

    this.setState({
      index
    });
  }

  render() {
    return (
      <div>
        <ol>
          {
            json.data.map((item, i) => {
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
