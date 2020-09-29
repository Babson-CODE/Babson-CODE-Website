const functions = require('firebase-functions');
const path = require('path');
const express = require('express');
const app = express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

app.use(express.static(path.join(__dirname, "..", 'build')));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "build", "index.html"));
  });

exports.app = functions.https.onRequest(app);