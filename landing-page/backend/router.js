import express from 'express'
import { SubscribeBox, MessageForm } from './schema.js'

const router = express.Router()

router.post('/subscribe-box', async (req, res) => {
  const newSubscriber = new SubscribeBox({
    SUBSCRIBER_EMAIL: req.body.email
  })
  try {
    await newSubscriber.save()
    res.send({
      type: 'Success',
      message: "New subscriber added!"
    })
    console.log(newSubscriber)
  } catch (e) {
    res.send({
      type: 'Error',
      message: e
    })
  }
})

router.post('/message-form', async (req, res)=> {
  const newMessage = new MessageForm({
    CONTACT_NAME: req.body.form.name,
    PHONE_NO: req.body.form.phone,
    MESSAGE: req.body.form.message
  })
  try {
    await newMessage.save()
    res.send({
      type: 'Success',
      message: 'Message received!'
    })
    console.log(newMessage)
  } catch (e) {
    res.send({
      type: 'Error',
      message: e
    })
  }
})

export default router