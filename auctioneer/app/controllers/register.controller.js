const config = require('config');

const BadRequest = require('../errors/badRequest');
const Responder = require('../../lib/expressResponder');
const logger = require('../../lib/logger');

const registrations = [];

class RegisterController {
  static register(req, res, next) {
    const bidderURL = req.body.bidderURL;
    if (!bidderURL) throw new BadRequest('Incomplete Data Given!');
    if (registrations.findIndex(ele => ele === bidderURL) === -1) registrations.push(bidderURL);
    Responder.success(res, 'Registration Successful!');
  }
}


module.exports = { RegisterController, registrations };
