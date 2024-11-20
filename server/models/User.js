const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: [String], enum: ['user', 'admin', 'newsCreator'], required: true, default: ['user'] }
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;  
