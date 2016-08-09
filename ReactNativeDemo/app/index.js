import React from 'react'

import {Scene, Router} from 'react-native-router-flux'

import LandingPage from 'ReactNativeDemo/app/views/LandingPage'
import AuthPage from 'ReactNativeDemo/app/views/auth/AuthPage'
import Dashboard from 'ReactNativeDemo/app/views/Dashboard'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} initial={true} hideNavBar={true}/>
          <Scene key="AuthPage"    component={AuthPage} hideNavBar={true} animation="fade"/>
          <Scene key="Dashboard"   component={Dashboard} hideNavBar={true}/>
        </Scene>
      </Router>
    )
  }
}
