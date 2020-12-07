const config = require('config');

const BadRequest = require('../errors/badRequest');
const Responder = require('../../lib/expressResponder');
const logger = require('../../lib/logger');


class RegistrationsController {
  static async list(req, res, next) {
    const { registrations } = require('./register.controller');
    Responder.success(res, registrations);
  }
}


module.exports = RegistrationsController;
