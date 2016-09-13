import React from 'react'

import {
    Text,
    View,
} from 'react-native'

import Button from 'ReactNativeDemo/app/components/Button'

import {DefaultHeadBar} from 'ReactNativeDemo/app/features/head_bar'

import SendIntentAndroid from 'react-native-send-intent'

export default class Features extends React.Component {
  render() {
    console.log(this.props.navigator.getCurrentRoutes())

    return(
      <View>
        <DefaultHeadBar navigator={this.props.navigator} title="非业务功能列表"/>
        <Button
          text="二维码生成"
          onPress={()=> this.props.navigator.push({id: "qrcode_gen", params: []})}
          />
        <Button
          text="二维码扫描"
          onPress={()=> this.props.navigator.push({id: "qrcode_scan", params: []})}
          />
        <Button
          text="分享"
          onPress={()=> {
            SendIntentAndroid.sendText({
              title: '分享测试',
              text: '我是分享内容 blanbalblalb',
              type: SendIntentAndroid.TEXT_PLAIN
            })
          }}
          />
      </View>
    )
  }
}