import React from 'react'

import {
  View, Text,
  TextInput,
  StyleSheet,
  Alert,

  TouchableWithoutFeedback,
  TouchableHighlight
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


export default SignInPage = React.createClass({
  render () {
    return (
      <View style={styles.page}>
        <Nav />
        <Form />
      </View>
    )
  }
})

class Nav extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: 0
    }
  }

  render () {
    var style_nav = {
      flex: 1, padding: 45,
      flexDirection: 'row',
    }

    var style_link = {
      // backgroundColor: '#fff4',
      height: 50,
      justifyContent: 'center',
      flex: 1,
      borderBottomColor: 'transparent',
      borderBottomWidth: 4,
      borderStyle: 'solid'
    }

    var style_link_active = {
      height: 50,
      justifyContent: 'center',
      flex: 1,
      borderBottomColor: '#D9F3FF',
      borderBottomWidth: 4,
      borderStyle: 'solid'
    }

    var style_link_text = {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    }

    var s0 = this.state.active == 0 ? style_link_active : style_link
    var s1 = this.state.active == 1 ? style_link_active : style_link

    return (
      <View style={style_nav}>
        <TouchableWithoutFeedback
          onPress={this.click_sign_in.bind(this)}
        >
          <View style={s0}>
            <Text style={style_link_text}>登录</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={this.click_sign_up.bind(this)}
        >
          <View style={s1}>
            <Text style={style_link_text}>注册</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={{flex: 1}} />
      </View>
    )
  }

  click_sign_in () {
    this.setState({active: 0})
  }

  click_sign_up () {
    this.setState({active: 1})
  }
}

var Form = React.createClass({
  getInitialState () {
    return {
      username: '',
      password: ''
    }
  },

  render () {
    return (
      <View style={styles.form}>
        <View style={styles.input_view}>
          <IconView type='user' />
          <TextInput
            style={styles.input}
            placeholder={'请输入用户名'}
            placeholderTextColor={'#fffc'}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
          ></TextInput>
        </View>

        <View style={styles.input_view}>
          <IconView type='lock' />
          <TextInput
            style={styles.input}
            placeholder={'请输入密码'}
            placeholderTextColor={'#fffc'}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          ></TextInput>
        </View>

        <TouchableWithoutFeedback
          onPress={() =>
            Alert.alert(
              '你按了登录按钮'
            )
          }
        >
          <View style={styles.submit_btn}>
            <Text style={styles.submit_btn_text}>登　录</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    )
  }
})

var IconView = React.createClass({
  render () {
    var style0 = {
      backgroundColor: '#fff3',
      position: 'absolute',
      width: input_view_height,
      height: input_view_height,
      top: 0, left: 0,
      justifyContent: 'center'
    }

    var style1 = {
      fontSize: 20, 
      color: 'white', 
      textAlign: 'center'
    }
    
    return (
      <View style={style0}>
        <Icon name={this.props.type} style={style1} />
      </View>
    )
  }
})

const input_view_height = 50
const page_bg = '#41C4FE'

const styles = {
  page: {
    flex: 1,
    backgroundColor: page_bg,
  },

  form: {
    padding: 45,
    marginBottom: 45
  },
  input_view: {
    backgroundColor: '#fff6',
    height: input_view_height,
    marginBottom: 15,
    paddingLeft: input_view_height,
  },
  input: {
    backgroundColor: '#fff0',
    height: input_view_height,
    fontSize: 20,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },

  submit_btn: {
    backgroundColor: '#fffc',
    borderRadius: 100,
    height: input_view_height,
    marginTop: 15,
    justifyContent: 'center',
  },
  submit_btn_text: {
    textAlign: 'center',
    fontSize: 20,
    color: page_bg,
  }
}