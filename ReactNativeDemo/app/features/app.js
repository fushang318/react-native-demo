import React from 'react'

import {
    Navigator,
} from 'react-native'

import SceneConfig from 'ReactNativeDemo/app/features/scene_config'

import Features from 'ReactNativeDemo/app/features/features'
import QrcodeGen from 'ReactNativeDemo/app/features/qrcode_gen'
import QrcodeScan from 'ReactNativeDemo/app/features/qrcode_scan'


const ROUTE_MAP = {
  'features':    {index: 0, component: Features, params: {}},
  'qrcode_gen':  {index: 1, component: QrcodeGen, params: {}},
  'qrcode_scan': {index: 3, component: QrcodeScan, params: {}}
};

class Route {
  /**
   * 获取 ID 对应的 Component
   * @param {any} id 页面的 ID 
   *              有严格的映射关系，会根据传入 ID 同名的文件夹去取路由对应的页面
   * @param {any} params Component 用到的参数
   */
  static get_route_page (route, navigator) {
      let id = route.id,
          params = route.params,
          routeObj = ROUTE_MAP[id],
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
  _render_route (route, navigator) {
    this.navigator = navigator;
    return Route.get_route_page(route, navigator);
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
        renderScene={this._render_route.bind(this)}
        // configureScene={(route, routeStack) => SceneConfig.push_from_right}
      />
    );
  }
}
