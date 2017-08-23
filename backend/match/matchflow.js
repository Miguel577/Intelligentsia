const _ = require('underscore');
const moment = require('moment');
const matchNow = require('./matchNowFun');
const matchLater = require('./matchLaterFun');

// Get current Day and Time
let presentDay = moment().format('dddd'); // Wednesday
let presentTime = moment().format('LT'); // Local Time, 4:59 PM

// All matching times are as of 7:00 AM ET
const weekly = 'Monday'
const matchTime = '7:00 AM'

// let userIds = ['dlkfj', 'asdf', ]

// var userModel = {
//   userId: String;
//   profile: {
//     aslkdfjj
//   },
//   facebookAuth: {
//
//   },
//   interests: [],
//   userMatched: [],
//   whenToMatch: [weekly, daily, search]
// }

// Weekly match
if ( presentTime === matchTime && presentDay === weekly) {
  matchLater();
}

// Daily match
if ( presentTime === matchTime ) {
  matchLater();
}

// Search match
if ( ) {
  matchNow();
}
