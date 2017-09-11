const admin = require('firebase-admin')
const functions = require('firebase-functions')
const createUser = require('./create_user')
const serviceAccount = require('./service_account.json')
const requestOneTimePassword = require('./request_one_time_password')
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://rnotp-473d8.firebaseio.com"
});

export.createUser = functions.https.onRequest(createUser)
export.requestOneTimePassword = functions.https.onRequest(requestOneTimePassword)