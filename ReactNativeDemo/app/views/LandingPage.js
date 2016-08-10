import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,

  Alert,
} from 'react-native';

import API from 'API'

import { Actions } from 'react-native-router-flux'


const page_bg = '#41C4FE'

export default class LandingPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true,
      current_user: null
    }
  }

  render() {
    style = {
      flex: 1,
      backgroundColor: page_bg,
      justifyContent: 'center',
    }

    ts = {
      color: 'white',
      textAlign: 'center',
      fontSize: 18
    }

    if (this.state.loading) {
      text = <Text style={ts}>正在验证用户 ……</Text>
    } else if (this.state.current_user) {
      user = this.state.current_user

      text = <Text style={ts}>已登录，用户 id: {user.id}, name: {user.name}</Text>
    } else {
      text = <Text style={ts}>用户未登录</Text>
    }

    return (
      <View style={style}>
        {text}
      </View>
    );
  }

  componentDidMount () {
    // 检查用户是否登录
    API.auth.get_user_info()
      .done((resJSON) => {
        // Alert.alert(JSON.stringify(resJSON))
        // this.setState({
        //   loading: false,
        //   current_user: resJSON,
        // })
        Actions.Dashboard({data: resJSON})
        // this.props.onNavigationChange('Dashboard')
      })
      .fail((resJSON) => {
        // 用户未登录
        // 转到登录页
        Actions.AuthPage()
        // Actions.Dashboard({data: {name: "haha"}})
        // this.props.onNavigationChange('AuthPage')
      })
  }
}
