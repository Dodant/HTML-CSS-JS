var User = require('./models/user')
var database = [];
database.push(new User(10, '사용자1', '010-111-1111', 'user1@mycom'));
database.push(new User(20, '사용자2', '010-222-2222', 'user2@myhome'));
module.exports = database;
