'use strict';
const jwt = require('jsonwebtoken');

module.exports = {
  login
};

function login(req, res) {
  // variables defined in the Swagger document can be referenced using req.swagger.params.{parameter_name}
  const {username, password} = req.swagger.params.body.value;
  const token = jwt.sign({username}, 'ski123');
  res.json({token});
}