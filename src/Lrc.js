import React, {Component} from 'react';

var currentIndex = 0;
var lrcArr = [];
class Lrc extends Component {
  componentDidMount () {
    this.fetchLrc(0, 0);
  }

  fetchLrc (time, index) {
    const that = this;
    fetch (this.props.lrc).then (function(res) {
    if (res.ok) {
      res.text().then(function(obj) {
        lrcArr = obj.split('\n');
        that.showLrc(lrcArr, time);
        currentIndex = index;
      });
    }}, function(ex) {
        console.log(ex)
    });
  }

  showLrc (arr, paraTime) {
    let time = parseInt(paraTime, 10);
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      if (/\[(\d{2}.){3}/.test(arr[i])) {
        let lrcTime = arr[i].slice(1, 8);
        let tmp = lrcTime.split(':');
        let numTime = tmp[0] * 60 + parseInt(tmp[1], 10);

        if(numTime <= time) {
          this.setState({
            lrc : arr[i].slice(10),
          })
        }
      }
    }
  }

  componentWillReceiveProps (nextProps) {
    if (currentIndex !== nextProps.index) {
      this.fetchLrc(nextProps.time, nextProps.index);
    } else {
      this.showLrc(lrcArr, nextProps.time);
    }
  }

  render () {
    return (
      <div>
        {this.state ? this.state.lrc : 'lyric'}
      </div>
    );
  }
}

export default Lrc;