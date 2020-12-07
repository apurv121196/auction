const config = require('../../config');

const BadRequest = require('../errors/badRequest');
const Responder = require('../../lib/expressResponder');
const logger = require('../../lib/logger');

class BidController {
  static async bid(req, res, next) {
    setTimeout(() => {
      Responder.success(res, {
        bidder_id: config.get('serviceName'),
        bid_value: Math.random()
      });
    }, config.get('delayTime'));
  }    
}


module.exports = BidController;
