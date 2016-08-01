import React from 'react'

import {
  View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'


export default class IconView extends React.Component {
  render () {
    var {
      width, height, backgroundColor, color
    } = this.props

    var style0 = {
      backgroundColor: backgroundColor,
      width: width,
      height: height,
      
      justifyContent: 'center',
      
      ...this.props.style
    }

    var style1 = {
      fontSize: height * 0.4, 
      color: color,

      textAlign: 'center'
    }
    
    return (
      <View style={style0}>
        <Icon name={this.props.type} style={style1} />
      </View>
    )
  }
}

const input_view_height = 50