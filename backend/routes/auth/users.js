require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const userRouter = express.Router();
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth');
const User = require('../../models/User');

module.exports = userRouter;

JWT_SECRET = process.env.JWT_SECRET || 'secret123';
// Register a new user
userRouter.post('/register', async (req, res) => {
    try {
        const { email, password, confirmPassword, username } = req.body;
        if (!email || !password || !username || !confirmPassword) {
            return res.status(400).json({ msg: 'Please enter all fields.' });
        }
        if (password.length < 6) {
            return res.status(400).json({ msg: 'The password must be at least 6 characters long.' });
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: 'Both passwords must match.' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User with this email already exists.' });
        }
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({
            email,
            password: hashedPassword,
            username,
        });
        const savedUser = await newUser.save();
        console.log(savedUser)
        res.json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Login a user
userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: 'Please enter all fields.' });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User with this email does not exist.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Incorrect password.' });
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username: user.username,
            },
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Verify token validity
userRouter.post('/tokenIsValid', async (req, res) => {
    try {
        const token = req.header('Authorization');
        if (!token) return res.json(false);

        const verified = jwt.verify(tokenParts[1], JWT_SECRET);
        if (!verified) return res.json(false);

        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a user
userRouter.delete('/delete/:id', auth, async (req, res) => {
    try {
        User.findByIdAndDelete(req.params.id, req.body).then(() => {
            res.json('User deleted.');
        })
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});