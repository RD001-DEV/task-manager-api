const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./user')
const { Timestamp } = require('mongodb')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        required: false,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
}) 

const Tasks = mongoose.model('Tasks', taskSchema)

module.exports = Tasks