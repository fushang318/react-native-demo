import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';

export default class Nav extends React.Component {
  render () {
    var style_nav = {
      paddingLeft: 45,
      paddingRight: 45,
      flexDirection: 'row',
      // backgroundColor: 'lightgreen'
    }

    var style_link = {
      height: 50,
      justifyContent: 'center',
      flex: 1,
      borderBottomWidth: 4,
      borderStyle: 'solid',
      borderBottomColor: 'transparent',
    }

    var style_link_active = {
      borderBottomColor: '#D9F3FF',
    }

    var style_link_text = {
      textAlign: 'center',
      color: 'rgba(255, 255, 255, 0.6)',
      fontSize: 20,
    }

    var style_link_text_active = {
      color: 'white',
    }



    var s0 = this.props.active == 'sign-in' ? [style_link, style_link_active] : style_link
    var s1 = this.props.active == 'sign-up' ? [style_link, style_link_active] : style_link

    var st0 = this.props.active == 'sign-in' ? [style_link_text, style_link_text_active] : style_link_text
    var st1 = this.props.active == 'sign-up' ? [style_link_text, style_link_text_active] : style_link_text

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
      </View>
    )
  }
}
