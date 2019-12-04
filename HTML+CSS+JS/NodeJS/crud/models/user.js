function User(uid, name, phone, email) {
    this.uid = 'u' + uid;
    this.name = name;
    this.phone = phone;
    this.email = email;
}
User.prototype.getUrl = function() {
    return '/users/info/' + this.uid;
}
module.exports = User;
