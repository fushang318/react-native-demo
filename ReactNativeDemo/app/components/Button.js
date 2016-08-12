import React from 'react'

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native'

export default class Button extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      disabled: false,
      loading: false,
      loading_text: "请稍后..."
    }
  }

  onPress(event) {
    if(this.state.disabled){return;}
    if(this.props.onPress){
      this.props.onPress(event, this)
    }
  }

  get_active_opacity(){
    if(this.state.disabled){
      return 1;
    }else{
      return 0.5;
    }
  }

  get_show_text(){
    if(this.state.loading){
      return this.state.loading_text;
    }else{
      return this.props.text;
    }
  }

  render () {
    return (
      <View style={[default_button_view_style, this.props.style]}>
        <TouchableOpacity
          activeOpacity={this.get_active_opacity()}
          onPress={this.onPress.bind(this)}
        >
          <View>
            <Text style={[default_button_text_style, this.props.text_style]}>{this.get_show_text()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const default_button_view_style = {
  backgroundColor: '#fff',
  borderRadius: 100,
  height: 50,
  justifyContent: 'center',
}

const default_button_text_style = {
  fontSize: 20,
  fontWeight: "bold",
  textAlign: "center",
}
