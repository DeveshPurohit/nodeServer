const jwt = require("jsonwebtoken");
const secret = 'devesh@12#1';

function setUser(user){
    jwt.sign(user,secret)
}

function getUser(token){
    jwt.verify(token,secret);
}

module.exports = {
    setUser,
    getUser
}