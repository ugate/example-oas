'use strict'

var varPet = require('./PetService');

module.exports.updatePet = function updatePet(req, res, next) {
  varPet.updatePet(req.swagger.params, res, next);
};

module.exports.addPet = function addPet(req, res, next) {
  varPet.addPet(req.swagger.params, res, next);
};

module.exports.findPetsByStatus = function findPetsByStatus(req, res, next) {
  varPet.findPetsByStatus(req.swagger.params, res, next);
};

module.exports.findPetsByTags = function findPetsByTags(req, res, next) {
  varPet.findPetsByTags(req.swagger.params, res, next);
};

module.exports.getPetById = function getPetById(req, res, next) {
  varPet.getPetById(req.swagger.params, res, next);
};

module.exports.updatePetWithForm = function updatePetWithForm(req, res, next) {
  varPet.updatePetWithForm(req.swagger.params, res, next);
};

module.exports.deletePet = function deletePet(req, res, next) {
  varPet.deletePet(req.swagger.params, res, next);
};

module.exports.uploadFile = function uploadFile(req, res, next) {
  varPet.uploadFile(req.swagger.params, res, next);
};