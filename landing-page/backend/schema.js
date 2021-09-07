import mongoose from 'mongoose'

const Schema = mongoose.Schema

const subscribe_box = new Schema({
  SUBSCRIBER_EMAIL: {
    type: String,
    required: true
  }
})

const message_form = new Schema({
  CONTACT_NAME: {
    type: String,
    required: true
  },
  PHONE_NO: {
    type: String,
    required: true
  },
  MESSAGE: {
    type: String,
    required: true
  }
})

const SubscribeBox = mongoose.model('SubscribeBox', subscribe_box)
const MessageForm = mongoose.model('MessageForm', message_form)

export { SubscribeBox, MessageForm }