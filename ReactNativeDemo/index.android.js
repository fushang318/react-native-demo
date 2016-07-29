/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Dimensions,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  WebView,

  TouchableWithoutFeedback,
  ToastAndroid,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

// console.disableYellowBox = true;
var full_height = Dimensions.get('window').height
var full_width = Dimensions.get('window').width

var ReactNativeDemo = React.createClass({
  render() {
    return (
      <View style={{flex: 1}}>
        <Header />
        <Content />
        <Footer />

        <TouchableWithoutFeedback
          onPress={() =>
            Alert.alert(
              '你按了一下蓝色的圆形',
              '对不起，没啥用',
            )
          }
        >
          <View style={{
            width: 64, height: 64, 
            backgroundColor: '#41C4FE', 
            position: 'absolute', 
            bottom: -9, left: (full_width - 64) / 2, 
            borderRadius: 1000,
            justifyContent: 'center'
          }}>
            <Icon name='user' style={{color: 'white', fontSize: 30, textAlign: 'center', position: 'relative', top: -4}} />
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
})

var Header = React.createClass({
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header_left_btn}>
          <Icon name='arrow-left' style={{color: 'white', fontSize: 20, textAlign: 'center'}} />
        </View>

        <View style={styles.header_title}>
          <Text style={styles.header_title_text}>个人面板</Text>
        </View>
        <View style={styles.header_right_btn}>
          <Icon name='cog' style={{color: 'white', fontSize: 20, textAlign: 'center'}} />
        </View>
      </View>
    );
  }
})

var Content = React.createClass({
  render() {
    return (
      <View style={styles.content}>
        <TouchableWithoutFeedback
          onPress={() =>
            Alert.alert(
              '你按了一下图片',
              '现在可以关掉这个提示了',
            )
          }
        >
          <Image
            style={styles.avatar}
            source={{uri: 'http://i.teamkn.com/i/M4mUaDaT.png?imageMogr2/thumbnail/!240x240'}}
          />
        </TouchableWithoutFeedback>
      </View>
    )
  }
})

var Footer = React.createClass({
  render() {
    return (
      <View style={{height: 45, backgroundColor: '#fff', flexDirection: 'row', position: 'relative'}}>
        <View style={{flex: 1, backgroundColor: '#0002'}} />
        <View style={{flex: 1, backgroundColor: '#0004'}} />
        <View style={{flex: 1, backgroundColor: '#0006'}} />
        <View style={{flex: 1, backgroundColor: '#0008'}} />
        <View style={{flex: 1, backgroundColor: '#000a'}} />
      </View>
    )
  }
})


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
    justifyContent: 'center'
  },
  header_right_btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    width: 50,
    height: 50,
    justifyContent: 'center'
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
    flex: 1,
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
  }
})


AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo)