import React from 'react'

import {
  View, Text,
  TextInput,
  StyleSheet,
  Alert,

  TouchableWithoutFeedback,
  TouchableHighlight,

  Animated
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import IconView from '../../components/IconView'

export default class SignInPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      nav: 'sign-in',

      fadeAnim: new Animated.Value(1),
      leftAnim: new Animated.Value(0)
    }
  }

  render () {
    return (
      <View style={styles.page}>
        <Nav active={this.state.nav} toggle={this.toggle.bind(this)} />

        <Animated.View
          style={{
            opacity: this.state.fadeAnim,
            transform: [
              {translateY: this.state.leftAnim}
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

  componentDidUpdate() {
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
      )
    ]).start()
  }

  toggle (nav) {
    return () => {
      this.setState({
        nav: nav,
        fadeAnim: new Animated.Value(0),
        leftAnim: new Animated.Value(50)
      })
    }
  }
}

class Nav extends React.Component {
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

    var style_link_text_active = {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
    }

    var style_link_text = {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: 20,
    }

    var s0 = this.props.active == 'sign-in' ? style_link_active : style_link
    var s1 = this.props.active == 'sign-up' ? style_link_active : style_link

    var st0 = this.props.active == 'sign-in' ? style_link_text_active : style_link_text
    var st1 = this.props.active == 'sign-up' ? style_link_text_active : style_link_text

    return (
      <View style={style_nav}>
        <TouchableWithoutFeedback
          onPress={this.props.toggle('sign-in')}
        >
          <View style={s0}>
            <Text style={st0}>登录</Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback
          onPress={this.props.toggle('sign-up')}
        >
          <View style={s1}>
            <Text style={st1}>注册</Text>
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

class SignInForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <View style={styles.form}>
        <Input
          icon='user'
          placeholder='用户名'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        ></Input>

        <Input
          icon='lock'
          placeholder='密码'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        ></Input>

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
}

class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  render () {
    return (
      <View style={styles.form}>
        <Input
          icon='user'
          placeholder='用户名'
          onChangeText={(username) => this.setState({username})}
          value={this.state.username}
        ></Input>

        <Input
          icon='lock'
          placeholder='密码'
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
        ></Input>

        <TouchableWithoutFeedback
          onPress={() =>
            Alert.alert(
              '你按了登录按钮'
            )
          }
        >
          <View style={styles.submit_btn}>
            <Text style={styles.submit_btn_text}>注　册</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
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