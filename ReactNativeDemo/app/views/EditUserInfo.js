import React from 'react'

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackAndroid,
  Platform,
} from 'react-native'

import {
  Form,
  InputField,
  PickerField,
} from 'FORM'

import Button from 'ReactNativeDemo/app/components/Button'

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

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid(){
    Actions.pop()
    return true
  }

  handleFormChange(formData) {
    var data = this.state.formData
    data = Object.assign(data, formData)
    this.setState({formData: data})
  }

  _generate_age_options() {
    var options = [{label:"保密", value: 0}]
    for(let i=1;i<=100;i++){
      options.push({label:i+"", value: i})
    }
    return options
  }

  submit_user_info(event, button) {
    button.setState({disabled: true, loading: true, loading_text: "正在保存.."})
    API.auth.put_user_info(this.state.formData)
      .done((resJSON) => {
        button.setState({disabled: false, loading: false})
        Actions.pop({refresh:{data: resJSON}})
      })
      .fail((resJSON) => {
        button.setState({disabled: false, loading: false})
      })
  }

  render() {
    return (
      <View style={styles.view}>
        <Form style={styles.form} ref="edit_user_info" onChange={this.handleFormChange.bind(this)}>
          <PickerField
            ref="gender"
            label="性别"
            value={this.state.formData.gender}
            options={this.gender_options}
            />
          <PickerField
            style={{marginBottom: 0}}
            ref="age"
            label="年龄"
            value={this.state.formData.age}
            options={this.age_options}
            />
        </Form>
        <Button
          text="保存"
          onPress={this.submit_user_info.bind(this)}
          style={styles.submit_user_info_button}
          text_style={styles.submit_user_info_button_text}
          />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    paddingTop: 54,
    backgroundColor: "#eee",
  },
  form: {
    paddingTop: 10,
  },
  submit_user_info_button_text: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: "bold",
    color: "white",
  },
  submit_user_info_button: {
    marginTop: 20,
    marginHorizontal: 10,
    backgroundColor: "#41C4FE",
    height: 44,
    padding: 0,
    justifyContent: "center",
  },
})
