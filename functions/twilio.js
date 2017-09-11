const twilio = require('twilio')
const credentials = require('./credentials.json')
const accountSid = credentials.account_sid
const authToken = credentials.auth_token

module.exports = new twilio.Twilio(accountSid, authToken)
