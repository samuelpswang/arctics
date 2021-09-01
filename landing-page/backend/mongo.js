import mongoose from 'mongoose'

const connectMongo = () => {
  mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const db = mongoose.connection

  db.on('error', console.error.bind(console, 'Connection Error:'))
  db.once('open', () => {console.log('MongoDB successfully connected!')})

}

const mongo = { connect: connectMongo }

export default mongo