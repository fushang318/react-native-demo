import React from 'react';
import {
  View,
  Image,
  Dimensions
} from 'react-native';

export default class LandingLogo extends React.Component {
  render () {
    pd = 45

    style = {
      flex: 1,
      paddingLeft: pd,
      paddingRight: pd,
      paddingTop: 30,
      paddingBottom: 30,
      justifyContent: 'center',
      // backgroundColor: 'red',
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

    sv = {
      width: width,
      // backgroundColor: 'red',
      alignItems: 'flex-end',
      flexDirection: 'row',
    }

    return (
      <View style={style}>
        <View style={sv}>
          <Image source={require('../../assets/image/tree.png')} style={s0} />
          <Image source={require('../../assets/image/travel.png')} style={s1}/>
        </View>
      </View>
    )
  }
}
