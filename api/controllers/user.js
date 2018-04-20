const User = require('../models/userModels');
const bcrypt = require('bcrypt');

const createUser = (req, res) => {
  const { username, password } = req.body;
  // create user takes in the username and password and saves a user.
  // our pre save hook should kick in here saving this user to the DB with an encrypted password.
  const user = new User({ username, password });
  user.save(function(err, savedUser){
    if (err) return res.status(422).send(err);
    res.json({ success: 'user saved', savedUser });
  });
};

module.exports = {
  createUser,
};
