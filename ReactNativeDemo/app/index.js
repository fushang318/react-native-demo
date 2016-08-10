import React from 'react'

import { StyleSheet } from 'react-native'

import {Scene, Router} from 'react-native-router-flux'

import LandingPage from 'ReactNativeDemo/app/views/LandingPage'
import AuthPage from 'ReactNativeDemo/app/views/auth/AuthPage'
import Dashboard from 'ReactNativeDemo/app/views/Dashboard'

const styles = StyleSheet.create({
  mini_nav_bar: {
    height: 10,
    borderBottomColor: '#41C4FE',
    backgroundColor: '#41C4FE',
  },
  nav_bar: {
    borderBottomColor: '#41C4FE',
    backgroundColor: '#41C4FE',
  },
  title: {
    color: 'white',
  }
})

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} initial={true} navigationBarStyle={styles.mini_nav_bar}/>
          <Scene key="AuthPage"    component={AuthPage}    animation="fade" navigationBarStyle={styles.mini_nav_bar}/>
          <Scene key="Dashboard"   component={Dashboard}   title="个人中心" hideNavBar={false} hideBackImage={true} navigationBarStyle={styles.nav_bar} titleStyle={styles.title}/>
        </Scene>
      </Router>
    )
  }
}
