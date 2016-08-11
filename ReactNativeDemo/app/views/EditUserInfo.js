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
} from 'react-native-form-generator'

import API from 'API'

import { Actions, NavBar } from 'react-native-router-flux'

export default class EditUserInfo extends React.Component {
  constructor(props){
    super(props)
    this.age_options = this._generate_age_options()
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
          <Text>姓名</Text>
          <Text>{this.props.data.name}</Text>
          <PickerField ref='gender'
            label='性别'
            onValueChange={()=> this.state.formData.gender}
            value={this.state.formData.gender}
            options={{
              "保密": "保密",
              "男": "男",
              "女": "女"
            }} />
            <PickerField ref='age'
              label='年龄'
              onValueChange={()=> {this.state.formData.age}}
              value={this.state.formData.age+""}
              options={this.age_options} />
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
    margin: 10,
    backgroundColor: "red",
    height: 44,
    padding: 0,
    justifyContent: "center",
  },
})
