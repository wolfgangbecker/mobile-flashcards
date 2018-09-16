# Mobile Flashcards

This android app lets users create decks of flashcards to help them study.
Every deck has a title and groups together a set of cards. Cards consist of a question/answer pair.
In order to evaluate the understanding of a topic, every deck can be used for a quiz.
The user can start a quiz, reveal the answer to each card and mark his/her guess as either correct or incorrect.

## Description
The main technologies/libraries used are [React Native](https://facebook.github.io/react-native/), [Redux](https://redux.js.org/) and [Expo](https://expo.io/).

All the data gets stored in the local storage (AsyncStorage).

## Setup
1. Clone the project.
2. Install [Node](https://nodejs.org/en/).
3. Within the project's root directory, run:
    1. `npm install` (or `yarn install`).
    2. `npm start` (or `yarn start`).
    3. A QR code should display, if not hit "q".
4. On your mobile device:
    1. Download [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).
    2. Open Expo and scan the QR code.