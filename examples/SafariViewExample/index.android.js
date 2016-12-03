/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

import SafariView from 'react-native-safari-view';

class SafariViewExample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          react-native-safari-view
        </Text>
        <Text style={styles.instructions}>
          github.com/naoufal/react-native-safari-view
        </Text>
        <Text style={styles.instructions}>
          {SafariView.isAvailable ? 'SafariView is available' : 'SafariView is not available'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SafariViewExample', () => SafariViewExample);
