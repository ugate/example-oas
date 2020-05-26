'use strict'

module.exports.getInventory = function getInventory(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getInventory'
  });
};

module.exports.placeOrder = function placeOrder(req, res, next) {
  res.send({
    message: 'This is the mockup controller for placeOrder'
  });
};

module.exports.getOrderById = function getOrderById(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getOrderById'
  });
};

module.exports.deleteOrder = function deleteOrder(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteOrder'
  });
};