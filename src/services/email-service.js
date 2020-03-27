'use strict'
let config = require('../config')
let mailgun = require('mailgun-js')({
  apiKey: config.mailgunApiKey,
  domain: config.mailgunDomain
})

exports.send = async (to, subject, body) => {
  mailgun.messages().send(
    {
      from:
        'Minha API de teste <postmaster@sandbox29f33ec295864566b1e5a1d5c26caa0a.mailgun.org>',
      to: to,
      subject: subject,
      html: body
    },
    function(error, body) {
      console.log(body)
    }
  )
  // You can see a record of this email in your logs:
  // https://app.mailgun.com/app/logs.

  // You can send up to 300 emails/day from this sandbox server.
  // Next, you should add your own domain so you can send 10000 emails/month for
  // free.
}
