# SokosHotelsApp
This is react-native application (react-native cli) that uses story book for creating custom components that can be re-used across your different react-native projects

## Prerequisite
In order to run this application you need to have the react-native development environment setup in your machine.
- Follow these instructions to have the react-native environment setup done - https://reactnative.dev/docs/environment-setup
- install 'yarn' using homebrew

## Usage
After react-native environment setup is done
- Checkout this project
- Navigate to root folder of the project and run 'yarn install' command. It will install all the dependencies required for the project
- run command 'yarn run storybook'. It will give you the following screen: 
![Alt text](./screenshot_1.png?raw=true "StoryBook")
- The left menubar in that browser page will be seen as loading until you launch the app in iOS/Android simulators

## Run in iOS Simulator
- run 'yarn ios' command to run the code in iOS simulator
- if above command throw some error related to Xcodebuild, the follow below steps for fixing it
- Navigate to ios folder in the project with command 'cd ios'
- run command 'pod install' - this will install native iOS dependencies for the project
- Now re-run command 'yarn ios' - xcodebuild should succeed and the code will now run in ios simulator
- Screen Shot from iOS simulator attached below
![Alt text](./storybook_menu_ios.png?raw=true "Stories Menu")
![Alt text](./story_book_calendar_picker_ios.png?raw=true "Calendar Picker Story")

## Run in Android Emulator
- Open/start any Android emulator using Android Studio
- run 'yarn android' command at the root folder of the project to run the code in Android emulator

