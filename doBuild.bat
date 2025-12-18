@echo off
SETLOCAL

:: --- Config ---
set PACKAGE=com.mapsairport
set DEVICE_ID=Q885FIQSRCHYXCEE

echo ===========================
echo Step 1: Uninstall old app
echo ===========================
adb -s %DEVICE_ID% uninstall %PACKAGE%
pause

echo ===========================
echo Step 2: Clean Gradle
echo ===========================
cd android
gradlew clean
cd ..
pause

echo ===========================
echo Step 3: Build and run
echo ===========================
npx react-native run-android --deviceId %DEVICE_ID%
pause

ENDLOCAL
