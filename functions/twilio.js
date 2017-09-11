const twilio = require('twilio')
const credentials = require('./credentials.json')
const accountSid = credentials.account_sid
const authToken = credentials.auth_token

module.export = new twilio.Twilio(accountSid, authToken)
