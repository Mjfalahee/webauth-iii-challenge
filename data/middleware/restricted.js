const jwt = require('jsonwebtoken');

const secrets = require('../secret/secrets');

module.exports = (req, res, next) => {
    console.log('inside restricted ---------');
    console.log(req.headers.authorization);
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodeToken) => {
            if (err) { //invalid token
                res.status(401).json({
                    message: 'You shall not pass.'
                });
            } else { //valid token
                req.user = {department: decodeToken.department, username: decodeToken.username};
                next();
            }
        })
    } else {
        res.status(400).json({
            message: 'No token provided.'
        })
    }
};