const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const rentCarSchema = new Schema({
    car: {
        type: String,
        required: true,
    },
    driver: {
        type: String,
        required: true,
    },
    startPoint: {
        type: String,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    time: [
        {
            startTime: {
                type: Date,
                required: true,
            },
            endTime: {
                type: Date,
                required: true,
            }
        }
    ],
    comment: {
        type: String
    },
    passanger:{
        type:String,
        requiired: true,
    },
    typeOfTravel:{
        type:String,
        requiired: true,
    }
});

module.exports = mongoose.model('RentCar', rentCarSchema, 'rentCar');  
