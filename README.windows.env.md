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

## 其他注意事项
1 android 5.0 以上机器调试时，请开启应用的浮选框权限  
2 因为开发调试支持热加载，所以需要手机和电脑进行端口映射，但是目前 android 5.0 以上机器连接后，需要在 cmd 下手动运行如下命令才能映射
```
adb reverse tcp:8081 tcp:8081
```

## 调试

下载 https://github.com/jhen0409/react-native-debugger/releases/download/v0.3.1/rn-debugger-win32.zip
解压并运行 React Native Debugger.exe  
在手机已经连接电脑，并且运行了应用的情况下
cmd 下运行
```
adb reverse tcp:8097 tcp:8097
```
就可以进行调试了
