import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

import {
  Form,
  InputField,
  PickerField,
} from 'FORM'

import API from 'API'

import { Actions, NavBar } from 'react-native-router-flux'

export default class EditUserInfo extends React.Component {
  constructor(props){
    super(props)
    this.age_options = this._generate_age_options()
    this.gender_options = [
      {label:"保密", value: "保密"},
      {label:"男", value: "男"},
      {label:"女", value: "女"},
    ]
    this.state = {
      formData: {
        age: props.data.age || 0,
        gender: props.data.gender,
      }
    }
  }

  handleFormChange(formData) {
    var data = this.state.formData
    data = Object.assign(data, formData)
    console.log("handleFormChange~~~~~~~~")
    console.log(data)
    this.setState({formData: data})
  }

  _generate_age_options() {
    var options = [{label:"保密", value: 0}]
    for(let i=1;i<=100;i++){
      options.push({label:i+"", value: i})
    }
    return options
  }

  submit_user_info() {
    API.auth.put_user_info(this.state.formData)
      .done((resJSON) => {
        Actions.pop({refresh:{data: resJSON}})
      })
      .fail((resJSON) => {
        console.log("post_user_info fail")
        console.log(resJSON)
      })
  }

  render() {
    return (
      <View style={styles.view}>
        <Form ref="edit_user_info" onChange={this.handleFormChange.bind(this)}>
          <PickerField
            ref="gender"
            label="性别"
            value={this.state.formData.gender}
            options={this.gender_options}
            />
          <PickerField
            ref="age"
            label="年龄"
            value={this.state.formData.age}
            options={this.age_options}
            />
        </Form>
        <TouchableOpacity
          onPress={this.submit_user_info.bind(this)}
        >
          <View style={styles.submit_user_info_button}>
            <Text style={styles.submit_user_info_button_text}>完成</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    marginTop: 64,
    paddingLeft: 10,
    paddingRight: 10,
  },
  submit_user_info_button_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
  },
  submit_user_info_button: {
    margin: 20,
    backgroundColor: "red",
    height: 44,
    padding: 0,
    justifyContent: "center",
  },
})
