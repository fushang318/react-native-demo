import React from 'react'

import {
  StyleSheet,
  View, Text
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


export default HeaderBar = React.createClass({
  render() {
    return (
      <View style={styles.header}>
        <View style={styles.header_btn}>
          <Icon name='arrow-left' style={{color: 'white', fontSize: 20, textAlign: 'center'}} />
        </View>

        <View style={styles.header_title}>
          <Text style={styles.header_title_text}>个人面板</Text>
        </View>

        <View style={styles.header_btn}>
          <Icon name='cog' style={{color: 'white', fontSize: 20, textAlign: 'center'}} />
        </View>
      </View>
    );
  }
})


const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#41C4FE',
    flexDirection: 'row'
  },
  header_btn: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    height: 50,
    width: 50,
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
})