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
- run 'yarn ios' command to run the code in iOS simulator
![Alt text](./storybook_menu_ios.png?raw=true "Stories Menu")
![Alt text](./story_book_calendar_picker_ios.png?raw=true "Calendar Picker Story")
- run 'yarn android' command to run the code in Android emulator

