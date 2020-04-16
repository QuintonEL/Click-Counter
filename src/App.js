import React from 'react';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='webdesigntuts-workshop'>
        <Counter />
      </div>
    )
  }
}

class Counter extends React.Component {
  state = {
    count: 0
  };

  handleClick = () => {
    this.setState((prevState, { count }) => ({
      count: prevState.count + 1
    }));
  };

  render() {
  return <button onClick={this.handleClick}>{this.state.count}</button>;
  }
}

export default App;