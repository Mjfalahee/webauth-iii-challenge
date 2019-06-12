const express = require('express');

const model = require('../models/usersModel');
const restricted = require('../middleware/restricted');

const router = express.Router();


//if user is logged in (checked by restricted middleware), this path returns a list of all users in the database.
router.get('/', restricted, (req, res) => { //might need checkDepartments for tomorrow here.
    model.find()
        .then(users => {
            res.json({users});
        })
        .catch(error => res.send(error));
});

module.exports = router;