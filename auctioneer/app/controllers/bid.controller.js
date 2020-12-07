const config = require('config');
const _ = require('lodash');
const BadRequest = require('../errors/badRequest');
const Responder = require('../../lib/expressResponder');
const logger = require('../../lib/logger');
const { registrations } = require('./register.controller');
const { getRequest } = require('../../lib/request');

class BidController {
  static async startBid(req, res, next) {
    const auctionId = req.params.auctionId;

    if (!auctionId) throw new BadRequest('Incomplete Data Given!');

    const promises = registrations.map(
      bidderURL => getRequest(bidderURL)
    );

    const bids = await Promise.all(
      promises.map(p => p.catch(err => null))
    );
    console.log(bids);
    if (bids.some(ele => ele)) Responder.success(res, _.max(bids));
    else Responder.operationFailed(res, {
      status: 504,
      message: "Bidders took too long to process"
    });
  }
}


module.exports = BidController;
