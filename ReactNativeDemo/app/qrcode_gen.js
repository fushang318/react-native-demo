import React from 'react'


import QRCode from 'react-native-qrcode';

import {
  StyleSheet,
  View,
  Text,
  TextInput
} from 'react-native';

import {DefaultHeadBar} from 'ReactNativeDemo/app/head_bar'


export default class QrcodeGen extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: 'http://www.zhihu.com'
    }
  }

  render() {
      return (
          <View style={styles.root}>
            <DefaultHeadBar navigator={this.props.navigator} title="二维码生成" leftType="back" />

            <View style={styles.input_box}>
              <Text>输入文字，实时生成二维码</Text>
              <TextInput
                  onChangeText={(text) => this.setState({text: text})}
                  value={this.state.text}
              />            
            </View>

            <View style={styles.qrcode_box}>
              <QRCode
                value={this.state.text}
                size={200}
                bgColor='black'
                fgColor='white' />
            </View>

          </View>
      );
  }

}

var styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: 'white',
    },
    input_box: {
      margin: 20,
    },
    qrcode_box: {
      alignItems: 'center',

    }
});