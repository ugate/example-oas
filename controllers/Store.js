'use strict'

var varStore = require('./StoreService');

module.exports.getInventory = function getInventory(req, res, next) {
  varStore.getInventory(req.swagger.params, res, next);
};

module.exports.placeOrder = function placeOrder(req, res, next) {
  varStore.placeOrder(req.swagger.params, res, next);
};

module.exports.getOrderById = function getOrderById(req, res, next) {
  varStore.getOrderById(req.swagger.params, res, next);
};

module.exports.deleteOrder = function deleteOrder(req, res, next) {
  varStore.deleteOrder(req.swagger.params, res, next);
};