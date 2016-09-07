import React from 'react'

import {
    Navigator,
} from 'react-native';

import Features from './features';
import QrcodeGen from './qrcode_gen';
import QrcodeScanResult from './qrcode_scan_result';
import QrcodeScan from './qrcode_scan'

import SceneConfigs from './scene_configs';

const RouteMap = {
  'features':    {index: 0, component: Features, params: {}},
  'qrcode_gen':  {index: 1, component: QrcodeGen, params: {}},
  'qrcode_scan_result': {index: 2, component: QrcodeScanResult, params: {}},
  'qrcode_scan': {index: 3, component: QrcodeScan, params: {}}
};

class Route {
  /**
   * 获取 ID 对应的 Component
   * @param {any} id 页面的 ID 
   *              有严格的映射关系，会根据传入 ID 同名的文件夹去取路由对应的页面
   * @param {any} params Component 用到的参数
   */
  static getRoutePage (route, navigator) {
      let id = route.id,
          params = route.params,
          routeObj = RouteMap[id],
          Component;
      if (routeObj) {
          Component = routeObj.component;
          //合并默认参数
          Object.assign(params, routeObj.params);
      } else {
          Component = Error;
          params = {message: '当前页面没有找到：' + id};
      }
      return <Component navigator={navigator} {...params} />;
  }     
  
}

export default class App extends React.Component {
  _renderRoute (route, navigator) {
    this.navigator = navigator;
    return Route.getRoutePage(route, navigator);
  }

  render() {
    return(
      <Navigator
        // 初始页面
        initialRoute={{
            id: 'features',
            params: {}
        }}
        // 路由入口
        renderScene={this._renderRoute.bind(this)}
        configureScene={(route, routeStack) =>
          SceneConfigs.PushFromRight
        }
      />
    );
  }
}