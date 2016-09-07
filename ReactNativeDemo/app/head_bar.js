import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    BackAndroid,
    Alert
} from 'react-native';

// 返回操作，用于导航栏的返回
import goBack from './go_back';

// navigationBar 的固定left\title\right 布局好诡异，只能用算的了，flex 各种问题
const screenWidth = Dimensions.get('window').width,
    btnWidth = 68;

const styles = StyleSheet.create({
    head_bar: {
      height: 55,
      backgroundColor: '#41C4FE',
      flexDirection: 'row',
    },
    left: {
      flex: 1,
      alignItems: 'flex-start', 
      justifyContent: 'center',
      marginLeft: 5,
    },

    title: {
      flex: 3,
      alignItems: 'center', 
      justifyContent: 'center',
    },

    right: {
      flex: 1,
      alignItems: 'flex-end', 
      justifyContent: 'center',
      marginRight: 5,
    },

    text: {
      fontSize: 20
    },

});


class DefaultHeadBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render_left() {
    if(this.props.leftType == "back"){
      return (
        <View style={styles.left}>
            <TouchableOpacity onPress={() => {
                goBack(this.props.navigator);
            }}>
                <Text style={[styles.text]}>返回</Text>
            </TouchableOpacity>
        </View>
      );  
    }else{
      return (
        <View style={styles.left}></View>
      );
    }
  }

  render_title() {
    if(this.props.title){
      return(
        <View style={styles.title}>
          <Text style={[styles.text]}>{this.props.title}</Text>
        </View>
      );
    }else{
      return (
        <View style={styles.title}></View>
      );
    }
  }

  render_right() {
    if(this.props.right){
      return(
        <View style={styles.right}>
          <TouchableOpacity onPress={() => {
              goBack(navigator);
          }}>
              <Text style={[styles.text]}>选项</Text>
          </TouchableOpacity>
        </View>
      );
    }else{
      return (
        <View style={styles.right}></View>
      );
    }
  }

  render() {
    return (
      <View style={styles.head_bar}>
        {this.render_left()}
        {this.render_title()}
        {this.render_right()}
      </View>
    );
  }
}




export {
  DefaultHeadBar,
}