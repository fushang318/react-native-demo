import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  NavigationExperimental,
} from 'react-native';

import LandingPage from 'ReactNativeDemo/app/views/LandingPage'
import AuthPage from 'ReactNativeDemo/app/views/auth/AuthPage'
import Dashboard from 'ReactNativeDemo/app/views/Dashboard'

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
  // Transitioner: NavigationTransitioner,
} = NavigationExperimental

const page_bg = '#41C4FE'

export default class RootPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      navigationState: {
        index: 0,
        routes: [{key: 'LandingPage'}]
      },
    }

    // this._exit = this._exit.bind(this)
    // this._onNavigationChange = this._onNavigationChange.bind(this)
  }

  render () {
    return (
      <YourNavigator
        navigationState={this.state.navigationState}
        onNavigationChange={this.onNavigationChange.bind(this)}
        onExit={this._exit}
      >
      </YourNavigator>
    )
  }

  onNavigationChange (key) {
    var { navigationState } = this.state

    // const route = {key: key}
    // navigationState = NavigationStateUtils.push(navigationState, route)

    navigationState = {
      index: 0,
      routes: [{key: key}]
    }

    // console.log(navigationState)

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState})
    }
  }
}

class YourNavigator extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  render () {
    return (
      <NavigationCardStack
        style={{flex: 1}}
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene.bind(this)}
      >
      </NavigationCardStack>
    )
  }

  _renderScene (sceneProps) {
    page = sceneProps.scene.route.key

    re = null
    switch (page) {
      case 'LandingPage':
        re = <LandingPage onNavigationChange={this.props.onNavigationChange} />
        break;
      case 'AuthPage':
        re = <AuthPage onNavigationChange={this.props.onNavigationChange} />
        break;
      case 'Dashboard':
        re = <Dashboard onNavigationChange={this.props.onNavigationChange} />
        break;
    }

    return (
      re
    ) 
  }
}