# windows 开发 react-native

搭建环境参考 http://reactnative.cn/docs/0.30/getting-started.html 进行

里面的有一些步骤不太适用于国内网络环境，可以换用下面提到的方式进行安装配置

## python2 和 Node 的安装
Chocolatey 速度太慢，换成手动安装 python2 node

### 安装 python2
访问 https://www.python.org/downloads/release/python-2712/ 下载安装包，进行安装
安装完后确定 python 已经被加入 PATH 环境变量

### 安装 Node
访问 https://nodejs.org/en/ 下载安装包，进行安装
安装完后确定 npm 已经被加入 PATH 环境变量


## 安装 Android Studio
官网下载 Android Studio 太慢  
访问  
http://pan.baidu.com/s/1i5O0q9J#path=%252FAndroid%252FDeveloper%2520Tools%252FWindows%252FAndroid%2520Studio%252F2.1.1  
下载 Android Studio 2.1.1 正式版（选择 android-studio-bundle 进行下载，里边包含了 android sdk）

安装过程参考 http://reactnative.cn/docs/0.30/getting-started.html#android-studio  

## git 安装
访问 http://pan.baidu.com/s/1gffRoER 下载安装包，进行安装  
安装过程中注意两个选择  
第一个是 Adjusting your PATH environment 时，选择 Run Git form the Windows Command Prompt    
第二个是 Configuring the line ending conversions 时，选择 Checkout Windows-style, commit Unix-style line endings  

虚拟机可以选用 Genymotion

## 连接 android 手机，进行调试

默认提供的 `react-native run-android` 在连接一些 android 品牌手机时，会遇到 apk 安装权限导致的安装失败的问题，特定版本的 gradle + android gradle tool 可以解决这个问题，但是在这些特定版本的 gradle + android gradle tool 下打包签名的 apk 时，会出现打包中缺少图片资源的问题，所以权衡利弊，我们用如下方式进行调试

进入 cmd, 运行如下命令
```
# 确保手机上已经删除了以前安装的该项目 app(否则会出现预期外的问题)
# 运行该命令后
# 1 PC 会额外启动一个 cmd 窗口运行 react native debug server
# 2 很多手机会弹框提示是否允许安装，请点击是，否则过一段时间会自动拒绝，导致安装失败
# 3 安装成功后，手动点击应用图片进入应用，可能会出现白屏的情况，这是因为 react native debug server 还没有完全启动完毕，等待一会后就会出现正确的界面了
# 4 有些机器的权限管理比较严格，如果进入正常界面后，摇动手机不会出现调试菜单，那么需要进入应用的权限设置并开启悬浮框权限（各个品牌手机设置方式不同，请自行查找方式）
cd ReactNativeDemo
run-android.bat
```

## 运行 PC 上的 debug 调试器
这个调试器，可以做到：  
1 查看界面 dom 结构  
2 查看 js console 输出  
3 js 断点调试  

下载 https://github.com/jhen0409/react-native-debugger/releases/download/v0.3.1/rn-debugger-win32.zip
解压并运行 React Native Debugger.exe  
在手机已经连接电脑，并且运行了应用的情况下
cmd 下运行
```
adb reverse tcp:8097 tcp:8097
```
就可以进行调试了

## 生成演示APK
运行 `react-native run-android ` 命令后再手机运行的是 debug 模式，需要手机和电脑保持连接才能运行  
如果需要生成可以离开电脑使用的演示版 apk，运行如下命令:
```
# 在运行命令之前，确保已经关闭了 debug 模式下的 react-native debug server 窗口，不然可能会出现打包后的apk 无法正常使用
cd ReactNativeDemo\android
gradlew assembleDemoRelease
```
命令执行完毕后会生成 apk 文件，路径为：
```
ReactNativeDemo\android\app\build\outputs\apk\app-demoRelease.apk
```
