import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Counter />
      </div>
    )
  }
}

class Counter extends React.Component {
  render() {
    return <button>0</button>;
  }
}

export default App;