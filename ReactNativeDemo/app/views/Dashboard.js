import React from 'react'

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native'

import API from 'API'

import { Actions, ActionConst } from 'react-native-router-flux'

import Button from 'ReactNativeDemo/app/components/Button'

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
            <Text style={styles.info_item_value}>{this.get_user_age()}</Text>
          </View>
        </View>
        <Button
          onPress={() => Actions.EditUserInfo({data: this.props.data})}
          text="编辑信息"
          style={styles.edit_user_info_button}
          text_style={styles.edit_user_info_button_text} />
        <Button
          text="退出登录"
          style={styles.logout}
          text_style={styles.logout_text}
          onPress={this.alert_sign_out.bind(this)}
        />
      </View>
    )
  }

  get_user_gender() {
    return this.props.data.gender || "保密"
  }

  get_user_age() {
    return this.props.data.age || "保密"
  }

  alert_sign_out() {
    Alert.alert(
      '确定退出登录么？',
      null,
      [
        {text: '确定', onPress: () => {
          console.log("sign out 1")
          API.auth.sign_out()
            .done(() => {
              Actions.LandingPage({type: ActionConst.RESET})
            })
        }},
        {text: '取消'},
      ]
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
    margin: 10,
    backgroundColor: "red",
    height: 44,
    padding: 0,
    justifyContent: "center",
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
  },
  logout_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
  },
  edit_user_info_button_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
  },
  edit_user_info_button: {
    backgroundColor: '#41C4FE',
    marginTop: 20,
    marginHorizontal: 10,
    height: 44,
    padding: 0,
    justifyContent: "center",
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
