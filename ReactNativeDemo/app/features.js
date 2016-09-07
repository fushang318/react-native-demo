import React from 'react'

import {
    Text,
    View
} from 'react-native';

import Button from 'ReactNativeDemo/app/components/Button'

import {DefaultHeadBar} from 'ReactNativeDemo/app/head_bar'

export default class Features extends React.Component {
  render() {
    console.log(this.props.navigator.getCurrentRoutes())

    return(
      <View>
        <DefaultHeadBar navigator={this.props.navigator} title="非功能列表"/>
        <Button
          text="二维码生成"
          onPress={()=> this.props.navigator.push({id: "qrcode_gen", params: []})}
          />
        <Button
          text="二维码扫描"
          onPress={()=> this.props.navigator.push({id: "qrcode_scan", params: []})}
          />
      </View>
    );
  }
}