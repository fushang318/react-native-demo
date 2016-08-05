import React from 'react'

import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  TouchableWithoutFeedback
} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import RNFetchBlob from 'react-native-fetch-blob'

const page_bg = '#41C4FE'

const styles = {
  page: {
    flex: 1,
    backgroundColor: page_bg,
  },

  btn_text: {
    textAlign: 'center',
    fontSize: 20,
    color: page_bg,
  }
}

class ImageView extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    var style = {
      flexDirection: 'row',
      paddingLeft: 45,
      paddingRight: 45,
      // backgroundColor: 'red',
      alignItems: 'flex-end',
      marginBottom: 30
    }

    width = Dimensions.get('window').width - 45 * 2

    w0 = width * 0.4 - 15
    w1 = width * 0.6 - 15 - 15

    s0 = {
      width: w0,
      height: w0,
      marginLeft: 15,
      opacity: 0.9,
      // backgroundColor: 'lightsalmon'
    }

    s1 = {
      width: w1,
      height: w1 / 582 * 164,
      marginLeft: 15,
      marginRight: 15,
      // backgroundColor: 'lightgreen',
    }

    return (
      <View style={style}>
        <Image source={this.props.source} style={s0} />
      </View>
    )
  }
}

class Button extends React.Component {
  render () {
    disabled = this.props.disabled
    loading = this.props.loading

    style = {
      backgroundColor: '#fff',
      borderRadius: 100,
      height: 50,
      marginTop: 15,
      justifyContent: 'center',
    }

    press = this.props.onPress
    children = this.props.children

    if (disabled) {
      style = [style, {
        opacity: 0.6
      }]

      press = null
    }

    if (loading) {
      press = null
      children =
        <Text style={styles.btn_text}>正在请求 ……</Text>
    }

    return (
      <TouchableWithoutFeedback
        onPress={press}
      >
        <View style={style}>
          {children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

class ImagePickerDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      imageSource: require('ReactNativeDemo/app/assets/image/tree.png'),
    }
  }

  render () {
    return (
      <View style={styles.page}>
        <ImageView source={this.state.imageSource} />

        <Button onPress={this.open.bind(this)} >
          <Text style={styles.btn_text}>获取图片</Text>
        </Button>

        <Button onPress={this.update.bind(this)} >
          <Text style={styles.btn_text}>上传</Text>
        </Button>

      </View>
    )
  }

  open () {
    var options = {
      title: '选择获取方式',
      takePhotoButtonTitle: "拍照",
      chooseFromLibraryButtonTitle: "相册",
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        var source;
        if (Platform.OS === 'ios') {
          source = {uri: response.uri.replace('file://', ''), isStatic: true};
        } else {
          source = {uri: response.uri, isStatic: true};
        }

        this.setState({
          imageSource: source
        });
      }
    });
  }

  update () {
    console.log("~~~~~~~~~~")
    var uri = this.state.imageSource.uri
    console.log(uri)
    uri = RNFetchBlob.wrap(uri)
    console.log(uri)
    RNFetchBlob.fetch(
      'POST', 'http://192.168.0.128:3000/upload',
      {
        'Content-Type' : 'multipart/form-data'
        // 'Content-Type' : 'application/octet-stream',
      },
      [
        { name : 'avatar-foo', filename : 'avatar-foo.png', type:'image/png', data: uri},
        { name : 'name', data : 'user'},
      ]
      // "RNFetchBlob-file:///storage/emulated/0/Pictures/image-33e05e3e-a03b-4fb7-9ad0-702d2ac01eec.jpg"
    ).then((res) => {
      console.log(res.text())
    }).catch((err) => {
      console.log(err)
    })
  }
}



export default ImagePickerDemo
