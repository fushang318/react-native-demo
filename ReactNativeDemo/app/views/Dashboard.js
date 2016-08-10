import React from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import HeaderBar from '../layout_components/HeaderBar'

import API from 'API'

import { Actions } from 'react-native-router-flux'

// console.disableYellowBox = true;
var full_height = Dimensions.get('window').height
var full_width = Dimensions.get('window').width

export default class Dashboard extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.view}>
        <Content data={this.props.data} />

        <TouchableWithoutFeedback
          onPress={
            () => {
              API.auth.sign_out().done(() => {
                Actions.AuthPage()
              })
            }
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
        <View style={styles.info}>
          <View style={styles.info_item}>
            <Text style={styles.info_item_key}>姓名</Text>
            <Text style={styles.info_item_value}>{this.props.data.name}</Text>
          </View>
          <View style={[styles.info_item]}>
            <Text style={styles.info_item_key}>性别</Text>
            <Text style={styles.info_item_value}>{this.get_user_gender()}</Text>
          </View>
          <View style={[styles.info_item, styles.clear_border]}>
            <Text style={styles.info_item_key}>年龄</Text>
            <Text style={styles.info_item_value}>{this.get_user_gender()}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={
            () => {
              API.auth.sign_out().done(() => {
                Actions.AuthPage()
              })
            }
          }
        >
          <View style={styles.logout}>
            <Text>退出登录</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  get_user_gender() {
    return this.props.data.gender || "未知"
  }

  get_user_age() {
    return this.props.data.age || "未知"
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
  view: {
    flex: 1,
    paddingTop: 54
  },
  info: {
    marginTop: 10,
    backgroundColor: "white",
  },
  info_item: {
    paddingVertical: 10,
    marginHorizontal: 15,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  clear_border: {
    borderBottomWidth: 0,
  },
  info_item_key: {
    flex: 2,
    fontSize: 18,
  },
  info_item_value: {
    flex: 3,
    color: "#aaa",
    fontSize: 18,
    textAlign: "right",
  },
  logout: {
    backgroundColor: "red",
    height: 54,
  },
  content: {
    flex: 1,
    backgroundColor: "#eee",
  },

  avatar: {
    width: 100,
    height: 100,
    borderRadius: 4,
    margin: 10,
  }
})
