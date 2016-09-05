import React from 'react';
import QRCode from 'react-native-qrcode';

import {
  AppRegistry,
  StyleSheet,
  View,
  TextInput
} from 'react-native';

class Helloworld extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      text: 'http://www.zhihu.com'
    }
  }

  render() {
      return (
          <View style={styles.container}>
              <TextInput
                  style={styles.input}
                  onChangeText={(text) => this.setState({text: text})}
                  value={this.state.text}
              />
              <QRCode
                  value={this.state.text}
                  size={200}
                  bgColor='black'
                  fgColor='white'/>
          </View>
      );
  }

}



var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

export default Helloworld;