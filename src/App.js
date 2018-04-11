import React, { Component } from 'react';
import Board from './Board';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props)
    console.log('App.constructor()', props)
  }

  componentWillMount() {
    console.log('App.componentWillMount()')

  }
  componentDidMount() {
    console.log('App.componentDidMount()')
  }



  render() {
    console.log('App.render()')
    return (
      <div className="App">
        <Board />
    </div>
    )
  }
}


export default App;
