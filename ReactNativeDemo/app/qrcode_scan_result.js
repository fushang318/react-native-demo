import React from 'react'

import {
    Text,
    View
} from 'react-native';

import Button from 'ReactNativeDemo/app/components/Button'

import {DefaultHeadBar} from 'ReactNativeDemo/app/head_bar'

export default class QrcodeScanResult extends React.Component {
  render() {
    console.log(this.props.navigator.getCurrentRoutes())

    return(
      <View>
        <DefaultHeadBar navigator={this.props.navigator} title="二维码扫描" leftType='back' />
        <Button
          text="扫一扫"
          onPress={()=> this.props.navigator.push({id: "qrcode_scan", params: []})}
          />
      </View>
    );
  }
}