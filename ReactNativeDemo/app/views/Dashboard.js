import React from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,

  TouchableWithoutFeedback,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import HeaderBar from '../layout_components/HeaderBar'

import API from 'API'

// console.disableYellowBox = true;
var full_height = Dimensions.get('window').height
var full_width = Dimensions.get('window').width

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <HeaderBar />
        <Content />
        <Footer />

        <TouchableWithoutFeedback
          onPress={() =>
            API.auth.sign_out().done(() => {
              this.props.onNavigationChange('LandingPage')
            })
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
}

class Content extends React.Component {
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
}

class Footer extends React.Component {
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
}


const styles = StyleSheet.create({
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