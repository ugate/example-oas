'use strict'

var varUser = require('./UserService');

module.exports.createUser = function createUser(req, res, next) {
  varUser.createUser(req, res, next);
};

module.exports.createUsersWithArrayInput = function createUsersWithArrayInput(req, res, next) {
  varUser.createUsersWithArrayInput(req.swagger.params, res, next);
};

module.exports.createUsersWithListInput = function createUsersWithListInput(req, res, next) {
  varUser.createUsersWithListInput(req.swagger.params, res, next);
};

module.exports.loginUser = function loginUser(req, res, next) {
  varUser.loginUser(req.swagger.params, res, next);
};

module.exports.logoutUser = function logoutUser(req, res, next) {
  varUser.logoutUser(req.swagger.params, res, next);
};

module.exports.getUserByName = function getUserByName(req, res, next) {
  varUser.getUserByName(req.swagger.params, res, next);
};

module.exports.updateUser = function updateUser(req, res, next) {
  varUser.updateUser(req.swagger.params, res, next);
};

module.exports.deleteUser = function deleteUser(req, res, next) {
  varUser.deleteUser(req.swagger.params, res, next);
};