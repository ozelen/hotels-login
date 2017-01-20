const jwt = require('jsonwebtoken');
const {User} = require('../models/user');

const sendError = (res, status, message) =>
  detail => res.status(status).end(); //.json({status, message, detail});

const addUser = user =>
  User.create(user);

const signUser = ({username}) =>
  res.json({
    username,
    token: jwt.sign({username}, 'ski123')
  });

const registerUser = (req, res) => {
  const user = req.swagger.params.body.value;
  User.find({username: user.username}).
    then(user => user ?
      sendError(res, 404, 'Hotel exists')():
      addUser(user));
}

const deleteUser = (req, res) => {}

const acvivateUser = (req, res) => {}

const blockUser = (req, res) => {}

module.exports = {
  registerUser,
  deleteUser,
  acvivateUser,
  blockUser
};