const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: [String],
        enum: ['user', 'admin', 'director', 'newsCreator', 'finance', 'driver', 'accountant', 'hr', 'receptionist', 'safe_keeper', 'admin_gosp', 'optimization', 'commercial', 'technical', 'craftService', 'serviceManagement', 'drilling'],
        required: true,
        default: ['user']
    },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    fullname: { type: String, required: true },
    position: { type: String, required: false },
    department: { type: String, required: false },
    contacts: {
        mail: { type: String, required: false },
        phone: { type: String, required: false }
    },
    status: {
        type: String,
        enum: ['online', 'offline'],
        required: true,
        default: 'offline'
    },
    duty: {
        type: String,
        enum: ['черговий', 'додатковий черговий', 'не черговий'],
        required: function () {
            return this.role.includes('driver');
        },
        default: 'не черговий'
    }
});

userSchema.pre('save', function(next) {
    if (!this.role.includes('driver')) {
        this.duty = undefined; // Remove the duty field
    }
    next();
});

const User = mongoose.model('User', userSchema, 'users');

module.exports = User;
