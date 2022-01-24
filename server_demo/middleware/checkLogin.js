/* eslint-disable no-underscore-dangle */
// external import
const jwt = require('jsonwebtoken');

const checkLogin = (req, res, next) => {
    const authorization = req.headers.token;
    //  58min->video
    try {
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // req.user.id & req.user.isAdmin
        req.user = decoded;

        next();
    } catch {
        // console.log(error);
        next('Authentication failed!!');
    }
};

module.exports = checkLogin;
