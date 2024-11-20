const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const infoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  newsContent: {
    type: String,
    required: true,
  },
  date: {
    type: Date,  // Зберігаємо дату як об'єкт Date
    default: Date.now,  // Встановлюємо поточну дату і час за замовчуванням
  },
  comments: [
    {
      author: String,
      content: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ]  
});


module.exports = mongoose.model('Info', infoSchema, 'infos');
