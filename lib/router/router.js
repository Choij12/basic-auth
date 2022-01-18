'use strict';

const express = require('express');
const router = express.Router();
const signup = require('../auth/signup.js');
const signin = require('../auth/signin.js');

router.post('/signup', async (req, res) => {
  await signup(req, res);
});

router.post('/signin', async (req, res, next) => {
  await signin(req, res, next);
});

router.use((req, res) => {
  res.status(200).send(req.body.user);
});

module.exports = router;