/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,

  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView
} from 'react-native';

// console.disableYellowBox = true;
var full_height = Dimensions.get('window').height - 24;

class ReactNativeDemo extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.header_left_btn} />
          <View style={styles.header_title}>
            <Text style={styles.header_title_text}>个人面板</Text>
          </View>
          <View style={styles.header_right_btn} />
        </View>
        <View style={styles.content}>
          <Image
            style={styles.avatar}
            source={{uri: 'http://i.teamkn.com/i/M4mUaDaT.png?imageMogr2/thumbnail/!240x240'}}
          />
        </View>
      </View>
    );
  }
}

// <WebView
//   style={{flex: 1, height: full_height}}
//   source={{uri: 'http://csm1.mindpin.com/mobile/learning-center'}}
// />


const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#41C4FE',
    flexDirection: 'row'
  },
  header_left_btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 50,
    width: 50,
  },
  header_right_btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 50,
    height: 50,
  },
  header_title: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    flex: 1,
    height: 50,
    justifyContent: 'center',
  },
  header_title_text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16
  },

  content: {
    // padding: 10
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
  }
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
