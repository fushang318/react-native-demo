ReactNativeDemo 文件夹是一个 react native 工程

# android 开发注意事项
1. android 5.0 以上机器调试时，请开启应用的浮选框权限
2. 因为开发调试支持热加载，所以需要手机和电脑进行端口映射，但是目前 android 5.0 以上机器连接后，需要手动运行如下命令才能映射
```
adb reverse tcp:8081 tcp:8081
```
