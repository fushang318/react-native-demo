import React from 'react'

import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native'

import {Actions, Scene, Router} from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/FontAwesome'

import LandingPage from 'ReactNativeDemo/app/views/LandingPage'
import AuthPage from 'ReactNativeDemo/app/views/auth/AuthPage'
import Dashboard from 'ReactNativeDemo/app/views/Dashboard'
import EditUserInfo from 'ReactNativeDemo/app/views/EditUserInfo'

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
  },
  back_button: {
    height: 54,
    width: 54,
    paddingLeft: 10,
    justifyContent: "center",
  },
  back_button_icon: {
    fontSize: 20,
    color: "white",
  },
  right_button: {
    height: 54,
    justifyContent: "center",
    position: 'absolute',
    top: 0,
    right: 2,
    padding: 8,
  },
  right_button_text: {
    fontSize: 20,
    color: "white",
  },
})

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="LandingPage" component={LandingPage} animation="fade" initial={true} navigationBarStyle={styles.mini_nav_bar}/>
          <Scene key="AuthPage"    component={AuthPage}    animation="fade" navigationBarStyle={styles.mini_nav_bar}/>
          <Scene key="Dashboard"   component={Dashboard}   animation="fade" title="个人中心" hideNavBar={false} hideBackImage={true} navigationBarStyle={styles.nav_bar} titleStyle={styles.title}/>
          <Scene key="EditUserInfo" component={EditUserInfo}
            title="编辑信息"
            hideNavBar={false}
            navigationBarStyle={styles.nav_bar}
            titleStyle={styles.title}
            renderBackButton={()=>{
              return (
                <TouchableWithoutFeedback onPress={()=> Actions.pop()}>
                  <View style={styles.back_button}>
                    <Icon name="arrow-left" style={styles.back_button_icon} />
                  </View>
                </TouchableWithoutFeedback>
              )
            }}
            />
        </Scene>
      </Router>
    )
  }
}
