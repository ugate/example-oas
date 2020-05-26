'use strict';

module.exports.createUser = async function createUser(req, res, next) {
  const rec = { firstName: 'Will', lastName: 'Hoover', username: 'whoover@nemours.org', gender: 'Male', ip: '127.0.0.1', dob: '1980-12-04', country: 'United States', password: 's3cr3t5' };
  const rslts = await req.svc.manager.db.postgres.user.create.user({
    binds: rec
  });
  res.send({
    message: 'This is the mockup controller for createUser',
    rslts
  });
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createUsersWithArrayInput'
  });
};

module.exports.createUsersWithListInput = function createUsersWithListInput(req, res, next) {
  res.send({
    message: 'This is the mockup controller for createUsersWithListInput'
  });
};

module.exports.loginUser = function loginUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for loginUser'
  });
};

module.exports.logoutUser = function logoutUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for logoutUser'
  });
};

module.exports.getUserByName = function getUserByName(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getUserByName'
  });
};

module.exports.updateUser = function updateUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateUser'
  });
};

module.exports.deleteUser = function deleteUser(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteUser'
  });
};

/**
 * Generates formats a GUID formatted identifier
 * @private
 * @param {String} [value] when present, will add any missing hyphens (if `hyphenate=true`) instead of generating a new value
 * @param {Boolean} [hyphenate=true] true to include hyphens in generated result
 * @returns {String} the generated GUID formatted identifier
 */
function generateGUID(value, hyphenate = true) {
  const hyp = hyphenate ? '-' : '';
  if (value) return hyphenate ? value.replace(/(.{8})-?(.{4})-?(.{4})-?(.{4})-?(.{12})/gi, `$1${hyp}$2${hyp}$3${hyp}$4${hyp}$5`) : value;
  return `xxxxxxxx${hyp}xxxx${hyp}4xxx${hyp}yxxx${hyp}xxxxxxxxxxxx`.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}