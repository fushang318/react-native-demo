import React from 'react'

import {
    Text,
    View,
    StyleSheet,
    Vibration,
    BackAndroid,
    Platform,
} from 'react-native'

import {DefaultHeadBar} from 'ReactNativeDemo/app/features/head_bar'
import BarcodeScanner from 'react-native-barcodescanner'

export default class QrcodeScan extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      barcode: '',
      torchMode: 'off',
      cameraType: 'back',
      type: '',
    }

    this._on_back_android = this.on_back_android.bind(this)
  }

  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this._on_back_android)
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackAndroid.removeEventListener('hardwareBackPress', this._on_back_android)
    }
  }

  on_back_android(){
    this.props.navigator.pop()
    return true
  }

  barcode_received(e) {
    if (e.data !== this.state.barcode || e.type !== this.state.type) Vibration.vibrate()
    
    this.setState({
      barcode: e.data,
      text: `${e.data} (${e.type})`,
      type: e.type,
    })
  }

  render() {
    console.log(this.props.navigator.getCurrentRoutes())

    return(
        <BarcodeScanner
          onBarCodeRead={this.barcode_received.bind(this)}
          style={{ flex: 1 }}
          showViewFinder={true}
          torchMode={this.state.torchMode}
          cameraType={this.state.cameraType}
        >
          <View style={styles.status_bar}>
            <Text style={styles.status_bar_text}>{this.state.barcode}</Text>
          </View>
        </BarcodeScanner>
    )
  }
}

const styles = StyleSheet.create({
  status_bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'white', 
  },
  status_bar_text: {
    fontSize: 20,
  },
})