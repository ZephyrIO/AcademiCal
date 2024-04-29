const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Event = require('../../models/Event');

module.exports = router;

// Route: @GET /calendar/events

router.get('/', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(404).send('No events found');
    } // try
}); // router.get

// Route: @GET/:id /calendar/events
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(404).send('Event not found');
    } // try
}); // router.get

// Route: @POST /calendar/events
router.post('/', auth, async (req, res) => {
   Event.create(req.body)
    .then((event) => res.json('Event added successfully'))
    .catch((err) => res.status(400).send('Failed to add event'));
}); // router.post

// Route: @PUT /calendar/events
router.put('/:id', auth, async (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body)
        .then((event) => res.json('Event updated successfully'))
        .catch((err) => res.status(400).send('Failed to update event'));
}); // router.put

// Route: @DELETE /calendar/events
router.delete('/:id', auth, async (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then((event) => res.json('Event deleted successfully'))
        .catch((err) => res.status(400).send('Failed to delete event'));
}); // router.delete