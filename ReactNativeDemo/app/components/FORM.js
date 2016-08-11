/*
 * @providesModule FORM
 */

import React from 'react'

import {
 StyleSheet,
 Text,
 View,
 TextInput,
 TouchableOpacity,
} from 'react-native'


class Form extends React.Component {
  constructor(props){
    super(props)
    this.values = {}
  }

  handleFieldChange(field_ref, value){
    this.values[field_ref] = value
    this.props.onChange && this.props.onChange(this.values);
  }

  render(){
    let wrappedChildren = [];

    React.Children.map(this.props.children, (child, i)=> {
      if (!child) {
        return;
      }

      wrappedChildren.push(React.cloneElement(child, {
        key: child.ref || child.type+i,
        fieldRef : child.ref,
        ref: child.ref,
        onChange:this.handleFieldChange.bind(this, child.ref)
      }))
    }, this)

    return (
      <View>
        {wrappedChildren}
      </View>
    )
   }
 }

class InputField extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: props.value,
    }
  }
  handleChange(event){
    const value = event.nativeEvent.text
    this.setState({value: value})
    if(this.props.onChange) this.props.onChange(value, this.valid)
  }

  render() {
    var view_style = {
      height: 44,
      flexDirection: 'row',
      backgroundColor: "#ccc",
      marginBottom: 10,
    }
    var label_view = {
      flex: 1,
      justifyContent: "center",
    }
    var input_view = {
      flex: 3,
      justifyContent: "center",
    }
    var label_text = {
      fontSize: 18,
      textAlign: "left",
    }

    var text_input = {
      fontSize: 18,
      textAlign: "right",
      color: "#aaa",
    }

    return (
      <View style={view_style}>
        <View style={label_view}>
          <Text style={label_text}>{this.props.label}</Text>
        </View>
        <View style={input_view}>
          <TextInput
            style={text_input}
            placeholder={this.props.placeholder}
            value={this.state.value}
            underlineColorAndroid="transparent"
            onChange={this.handleChange.bind(this)}
          />
        </View>
      </View>
    )
  }
}


export {
  InputField,
  Form,
}
