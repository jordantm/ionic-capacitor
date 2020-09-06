# ionic-capacitor

POC for Android/iOS app built with React/Ionic/Capacitor

# initial setup
`cd react-ionic`
`npm i`

Init capacitor & tell it to watch the build folder for android/ios builds
`npx cap init --web-dir build`

Create android/ios projects
`npx cap add android && npx cap add ios`

# start
`npm start`

# build
`npm run build`
* Also runs the `npx cap copy && npx cap sync` command. This will build the app and sync the android/ios projects to the folder we linked it in the init command. (build)

# open with android studio
`npx cap open android`
- Select an emulator from toolbar in Android Studion to run the mobile app after it's been built

# open with x-code
`npx cap open ios`
- Select an emulator from toolbar in Xcode to run the mobile app after it's been built
