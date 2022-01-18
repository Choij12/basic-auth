'use strict';

const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { UserModel } = require('../models/index.js');
const { isValid } = require('../models/users.js');

async function signin(req, res, next) {

  let basicHeaderParts = req.headers.authorization.split(' ');  
  let encodedString = basicHeaderParts.pop();  
  let decodedString = base64.decode(encodedString); 
  let [username, password] = decodedString.split(':'); 

  try {
    const user = await UserModel.findOne({ where: { username: username } });
    const valid = await isValid(password, user.password);
    if (valid) {
      req.body.user = {
        username: user.username,
      };
      next();
    }
    else {
      console.log(password);
      next('Error logging in');
    }
  } catch (error) { res.status(403).send('Invalid Login'); }

}

module.exports = signin;
