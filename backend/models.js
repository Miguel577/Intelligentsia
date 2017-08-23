const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  fname: String,
  lname: String,
  matchedUser: Array,
  profile: Object,
  whenToMatch: String,
});

User = mongoose.model('User', userSchema);

module.exports = {
  User: User,
};
