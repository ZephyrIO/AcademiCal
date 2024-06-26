const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    img: {
        type: String
    },
});

module.exports = Event = mongoose.model('event', EventSchema);