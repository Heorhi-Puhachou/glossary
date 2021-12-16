import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { StyleSelector } from './style-selector';

function List(props) {
  return (
    <ol>{props.items}</ol>
  );
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredGlosses: [],
      style: 'be-tarask',
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/Heorhi-Puhachou/excel_json_parser/main/glossary.json')
      .then(response => response.json())
      .then((jsonData) => {
        this.state.glosses = jsonData;
      })
      .catch((error) => {
        // handle your errors here
        console.error(error);
      });
  }

  handleChangeX(event) {
    const filteredGlosses = this.state.glosses.filter(chekContain);

    function chekContain(value) {
      return value.originalValue.includes(event.target.value);
    }

    this.setState({
      filteredGlosses: filteredGlosses,
    });
  }

  onChangeStyle(event) {
    this.setState({
      style: event.target.value,
    });
    console.log(event.target.value);
  }

  render() {
    const records = this.state.filteredGlosses.map((item) => {
      let renderValue;
      if (this.state.style === 'lacinka') {
        renderValue = item.lacinka;
      } else if (this.state.style === 'be-tarask') {
        renderValue = item.tarask;
      } else {
        renderValue = item.acad;
      }
      return (
        <li key={item.id}>
          <div className="orig">{item.originalValue}</div>
          <div className="value">{renderValue.value}</div>
          <div className="wrong">{renderValue.wrong}</div>
          <div className="comment">{renderValue.comment}</div>
        </li>
      );
    });

    return (
      <div id="outer" className="three-rows">
        <div id="inner" className="input">
          <input type="text" value={this.state.value} onChange={i => this.handleChangeX(i)} />
        </div>
        <StyleSelector style={this.state.style} onChangeStyle={event => this.onChangeStyle(event)} />
        <div id="inner-l" className="records">
          <List items={records} />
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root'),
);
