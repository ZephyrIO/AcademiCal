const express = require('express');
const app = express();
const port = process.env.PORT || 8085;
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({extended: false}));

const events = require('./routes/calendar/events');
app.use('/calendar/events', events);


const conn_str = 'mongodb+srv://lukedinkla:acidemicaliscool@acidemical.dis5yzb.mongodb.net/?retryWrites=true&w=majority&appName=acidemical';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str).then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
    console.log('Connected to MongoDB');
})
.catch((err) => console.error(err));

