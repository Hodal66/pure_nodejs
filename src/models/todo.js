import mongoose from 'mongoose'
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 255,
  },
  completed: {
    type: Boolean,
    default: false,
  },
})
export default todoSchema
