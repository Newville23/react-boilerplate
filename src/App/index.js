import React, { Component } from 'react';
import styles from './styles.css';
import { hot } from 'react-hot-loader';
class App extends Component {
  render () {
    return <h1 className={styles.titleRed}>Hello boilerplates </h1>
  }
}

export default hot(module)(App)
