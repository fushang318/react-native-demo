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
} from 'FORM'

import API from 'API'

import { Actions, NavBar } from 'react-native-router-flux'

export default class EditUserInfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      formData: {
        age: props.data.age,
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
    var options = {"保密":"保密"}
    for(let i=1;i<=100;i++){
      let str = i + ""
      options[str] = str
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
          <InputField
            ref='gender'
            label='性别'
            value={this.state.formData.gender}
            />
          <InputField
            ref='age'
            label='年龄'
            value={this.state.formData.age+""}
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
