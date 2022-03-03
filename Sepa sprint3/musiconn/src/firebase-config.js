/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const firebaseConfig = {
    apiKey: "AIzaSyCBtC1jhF68kfMuajQsSwJAmp-aofqTWmk",
    authDomain: "soundon-c96fa.firebaseapp.com",
    projectId: "soundon-c96fa",
    storageBucket: "soundon-c96fa.appspot.com",
    messagingSenderId: "1063722134091",
    appId: "1:1063722134091:web:d28dce14b08a43963d3bce",
    measurementId: "G-6E1BBP3F7W"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}