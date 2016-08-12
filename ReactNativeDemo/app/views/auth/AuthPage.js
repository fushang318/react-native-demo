import React from 'react'

import {
  View, Text,
  TextInput,
  StyleSheet,
  Alert,
  Image,
  Dimensions,

  TouchableWithoutFeedback,
  TouchableHighlight,

  Animated,
  AsyncStorage
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import IconView from 'ReactNativeDemo/app/components/IconView'

import API from 'API'

import LandingLogo from 'ReactNativeDemo/app/views/auth/LandingLogo'
import Nav from 'ReactNativeDemo/app/views/auth/Nav'

import { Actions, ActionConst } from 'react-native-router-flux'

const input_view_height = 50
const page_bg = '#41C4FE'


export default class SignInPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nav: 'sign-in',

      fadeAnim: new Animated.Value(1),
      leftAnim: new Animated.Value(0),
    }
  }

  render () {
    page_style = {
      flex: 1,
      backgroundColor: page_bg,
    }

    nav_props = {
      active: this.state.nav,
      toggle: this.toggle.bind(this)
    }

    is_sign_in = this.state.nav == 'sign-in'

    return (
      <View style={page_style}>
        <LandingLogo />
        <Nav {...nav_props} />

        <Animated.View
          style={{
            opacity: this.state.fadeAnim,
            transform: [
              {translateX: this.state.leftAnim},
            ]
          }}
        >
        {
          this.state.nav == 'sign-in' ? <SignInForm /> : <SignUpForm />
        }
        </Animated.View>
      </View>
    )
  }

  componentDidUpdate () {
    Animated.parallel([
      Animated.timing(
        this.state.fadeAnim, {
          toValue: 1,
          duration: 500
        }
      ),
      Animated.timing(
        this.state.leftAnim, {
          toValue: 0,
          duration: 500
        }
      ),
    ]).start()
  }

  toggle (nav) {
    return () => {
      if (this.state.nav == nav) {
        return
      }

      lf = (nav == 'sign-in') ? new Animated.Value(50) : new Animated.Value(50),

      this.setState({
        nav: nav,
        fadeAnim: new Animated.Value(0),
        leftAnim: lf,
      })
    }
  }
}

class SignInForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',

      loading: false,
      error_tip: null,
    }
  }

  render () {
    valid = this.valid()
    btn_disabled = !valid
    btn_text = valid ? '登　录' : '输入信息后点击登录'

    return (
      <View style={styles.form}>
        <Input icon='user' placeholder='用户名'
          onChangeText={this.onChangeText('username')}
          value={this.state.username} />

        <Input secureTextEntry={true} icon='lock' placeholder='密码'
          onChangeText={this.onChangeText('password')}
          value={this.state.password} />

        <Button onPress={this.sign_in.bind(this)} disabled={btn_disabled} loading={this.state.loading} >
          <Text style={styles.submit_btn_text}>{btn_text}</Text>
        </Button>

        <ErrorTip tip={this.state.error_tip}/>
      </View>
    )
  }

  onChangeText (field) {
    return (value) => {
      ns = {error_tip: null}
      ns[field] = value

      this.setState(ns)
    }
  }

  valid () {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  get_form_data () {
    return {
      name: this.state.username,
      password: this.state.password
    }
  }

  sign_in () {
    this.setState({loading: true})

    API.auth.sign_in(this.get_form_data())
      .done((resJSON) => {
        Actions.LandingPage({type: ActionConst.RESET})
      })
      .fail((resJSON) => {
        console.log("resJSON")
        console.log(resJSON)
        var error = ""
        switch(resJSON.error) {
          case 'AuthFailure':
            error = '登录失败，用户名/密码不正确'
            break;
          case 'UserNotExists':
            error = '登录失败，用户不存在'
            break;
        }
        this.setState({error_tip: error})
      })
      .always((res) => {
        this.setState({loading: false})
      })
  }
}

class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',

      loading: false,
      error_tip: null,
    }
  }

  render () {
    valid = this.valid()
    btn_disabled = !valid
    btn_text = valid ? '注　册' : '输入信息后点击注册'

    return (
      <View style={styles.form}>
        <Input icon='user' placeholder='用户名'
          onChangeText={this.onChangeText('username')}
          value={this.state.username} />

        <Input secureTextEntry={true} icon='lock' placeholder='密码'
          onChangeText={this.onChangeText('password')}
          value={this.state.password} />

        <Button onPress={this.sign_up.bind(this)} disabled={btn_disabled} loading={this.state.loading} >
          <Text style={styles.submit_btn_text}>{btn_text}</Text>
        </Button>

        <ErrorTip tip={this.state.error_tip} />
      </View>
    )
  }

  onChangeText (field) {
    return (value) => {
      ns = {error_tip: null}
      ns[field] = value

      this.setState(ns)
    }
  }

  valid () {
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  get_form_data () {
    return {
      name: this.state.username,
      password: this.state.password
    }
  }

  sign_up () {
    this.setState({loading: true})

    API.auth.sign_up(this.get_form_data())
      .done((resJSON) => {
        Actions.LandingPage({type: ActionConst.RESET})
      })
      .fail((resJSON) => {
        switch(resJSON.error) {
          case 'UserNameAlreadyExists':
            error = '已经有同名用户存在'
            break;
        }
        this.setState({error_tip: error})
      })
      .always((res) => {
        this.setState({loading: false})
      })
  }
}

// ---------------------

class Button extends React.Component {
  render () {
    disabled = this.props.disabled
    loading = this.props.loading

    style = {
      backgroundColor: '#fff',
      borderRadius: 100,
      height: input_view_height,
      marginTop: 15,
      justifyContent: 'center',
    }

    press = this.props.onPress
    children = this.props.children

    if (disabled) {
      style = [style, {
        opacity: 0.6
      }]

      press = null
    }

    if (loading) {
      press = null
      children =
        <Text style={styles.submit_btn_text}>正在请求 ……</Text>
    }

    return (
      <TouchableWithoutFeedback
        onPress={press}
      >
        <View style={style}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class Input extends React.Component {
  render () {
    return (
      <View style={styles.input_view}>
        <InputIcon type={this.props.icon} />
        <TextInput
          style={styles.input}
          placeholderTextColor={'#fffc'}

          secureTextEntry={this.props.secureTextEntry}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          value={this.props.value}
        ></TextInput>
      </View>
    )
  }
}

class InputIcon extends React.Component {
  render () {
    return (
      <IconView
        width={input_view_height}
        height={input_view_height}
        backgroundColor='#fff3'
        color='#fff'
        type={this.props.type}
        style={{
          position: 'absolute',
          top: 0, left: 0
        }}
      ></IconView>
    )
  }
}

class ErrorTip extends React.Component {
  render () {
    errs = {
      marginTop: 15,
      backgroundColor: '#0001',
      height: 40,
      // borderRadius: 3,
      justifyContent: 'center',
      paddingLeft: 40
    }
    hide = {
      opacity: 0,
    }

    ts = {
      color: 'white',
      fontSize: 16,
    }

    style = this.props.tip ? errs : [errs, hide]

    return (
      <View style={style}>
        <IconView
          width={40}
          height={40}
          color='#fffc'
          type='warning'
          style={{
            position: 'absolute',
            top: 1, left: 0
          }}
        ></IconView>
        <Text style={ts}>{this.props.tip}</Text>
      </View>
    )
  }
}

const styles = {
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
  submit_btn_text: {
    textAlign: 'center',
    fontSize: 20,
    color: page_bg,
  },
}
