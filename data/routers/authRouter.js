const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const model = require('../models/usersModel');
const secrets = require('../secret/secrets');

const router = express.Router();


// /register

router.post('/register', (req, res) => {
    let info = req.body;
    const hash = bcrypt.hashSync(info.password, 8)
    info.password = hash; //make sure to store hash as password

    model.addUser(info)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            res.status(500).json(error);
        });
});


// /login

router.post('/login', (req, res) => {
    let {username, password} = req.body;

    model.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user); //generating token for use
                res.status(200).json({
                    message: `Welcome ${user.username}, have a cookie!`,
                    token,
                });
            } else {
                res.status(401).json({
                    message: 'Invalid Credentials.'
                });
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

//generating a token with payload

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        department: user.department
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options);
}



module.exports = router;