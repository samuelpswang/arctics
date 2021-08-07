import axios from 'axios'

const instance = axios.create({
  baseURL: "http://localhost:4000/"
})

const submitSubscriber = async (email) => {
  const { data: { type, message } } = await instance.post('/subscribe-box', {
    email
  })
  console.log('email', email)
  return {type, message}
}

const submitMessageForm = async (form) => {
  const { data: { type, message } } = await instance.post('/message-form', {
    form
  })
  console.log('form', form)
  return { type, message}
}

export { submitSubscriber, submitMessageForm }