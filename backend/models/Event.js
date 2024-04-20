const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    img: {
        type: String
    }
});

module.exports = Event = mongoose.model('event', EventSchema);