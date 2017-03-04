import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

import SearchScreen from './screens/search/index';

export default class Lafzi extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <SearchScreen />
      </StyleProvider>
    );
  }
}

AppRegistry.registerComponent('Lafzi', () => Lafzi);
