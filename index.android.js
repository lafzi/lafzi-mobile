import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/layouts/Home';

export default class Lafzi extends Component {
  render() {
    return (
        <Home />
    );
  }
}

AppRegistry.registerComponent('Lafzi', () => Lafzi);
