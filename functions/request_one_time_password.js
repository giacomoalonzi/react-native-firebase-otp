const admin = require('firebase-admin')
const twilio = require('./twilio')

module.exports = (req, res) => {
  if (!req.body.phone) {
    return res.status(422).send({ err: 'You must provide a phone number.' })
  }
  const phone = String(req.body.phone).replace(/[^\d]/g, '')
  admin
    .auth()
    .getUser(phone)
    .then(userRecord => {
      const code = Math.floor(Math.random() * 8999 + 1000)
      twilio.messages.create(
        {
          from: '+390809080554',
          to: phone,
          body: 'Your code is' + code
        },
        err => {
          if (err) {
            return res.status(422).send(err)
          }

          admin
            .database()
            .ref('users/' + phone)
            .update({ code: code, codeValid: true }, () => res.send({ success: true }))
        }
      )
    })
    .catch(err => res.status(422).send({ err }))
}
