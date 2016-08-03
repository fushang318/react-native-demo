import React from 'react'

import {
  View,
  Animated
} from 'react-native'

export default class AnimatedFadeView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(0),
      left: new Animated.Value(0),
    }
  }

  render () {
    style = {
      opacity: this.state.opacity
    }

    return (
      <Animated.View style={style}>{this.props.children}</Animated.View>
    )
  }

  componentDidUpdate () {
    console.log(123)

    Animated.parallel([
      Animated.timing(
        this.state.opacity, {
          toValue: 1,
          duration: 1000
        }
      ),
      // Animated.timing(
      //   this.state.leftAnim, {
      //     toValue: 0,
      //     duration: 500
      //   }
      // ),
      // Animated.timing(
      //   this.state.scaleAnim, {
      //     toValue: 1,
      //     duration: 500
      //   }
      // ),
    ]).start()
  }
}