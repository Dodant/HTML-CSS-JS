var database = require('../database');
var User = require('../models/user');

exports.userList = function(req, res) {
    res.render('userList', {title:'사용자 목록', users:database});
}

exports.addUser_get = function(req, res) {
    res.send('addUser_get: 아직 구현되지 않았음');
}

exports.addUser_post = function(req, res) {
    res.send('addUser_post: 아직 구현되지 않았음');
}

exports.deleteUser = function(req, res) {
    res.send('deleteUser: 아직 구현되지 않았음!');
}

exports.updateUser = function(req, res) {
    res.send('updateUser: 아직 구현되지 않았음!');
}

exports.userInfo = function(req, res) {
    res.send('uerInfor: 아직 구현되지 않았음!');
}
