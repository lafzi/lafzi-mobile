import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import SearchScreen from './screens/search/index';

export default class Lafzi extends Component {
  render() {
    return (
        <SearchScreen />
    );
  }
}

AppRegistry.registerComponent('Lafzi', () => Lafzi);
