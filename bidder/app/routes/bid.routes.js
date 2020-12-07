const express = require('express');
const BidController = require('../controllers/bid.controller');

const initBidRoutes = () => {
  const bidRouter = express.Router();
  bidRouter.get(BidController.bid);

  return bidRouter;
};

module.exports = initBidRoutes;
