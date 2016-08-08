cd android
gradlew assembleDebug && adb install app\build\outputs\apk\app-debug.apk && cd .. && adb reverse tcp:8081 tcp:8081 && start react-native start
