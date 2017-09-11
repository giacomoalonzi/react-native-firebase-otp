const admin = require('firebase-admin')

module.exports = (req, res) => {
  // verify the user provided phone
  if (!req.body.phone) {
    return res.status(422).send({ error: 'Bad Input' })
  }
  // Sanitize the phone number (remove dash and parens)
  const phone = String(req.body.phone).replace(/[^\d]/g, '')

  // Create a new user account using that phone number
  admin
    .auth()
    .createUser({ uid: phone })
    .then(user => res.send(user))
    .catch(err => res.status(422).send({ err }))
  // Respond to user requst, saying the account was made
}
