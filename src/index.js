import Express from 'express'
import Cors from 'cors'
import Helmet from 'helmet'
import limiter from 'express-rate-limit'
import Morgan from 'morgan'
import mongoose from 'mongoose'
import 'dotenv/config'
const app = Express()
app.use(Cors())
app.use(Helmet())
app.use(Morgan('tiny'))
app.use(Express.json())
app.use(limiter)

const port = 5000

const uri =
  'mongodb+srv://Hodal:1234@portfoliocruster.a2sjgu5.mongodb.net/?retryWrites=true&w=majority'
async function connect() {
  try {
    await mongoose.connect(uri)
    console.log('Mongoose conected successfully!!')
  } catch (error) {
    console.log(error.message)
  }
}
connect()
app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
