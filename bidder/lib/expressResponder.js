const logger = require('./logger');
const _ = require('lodash');

function Responder() {}

/*
 * This method sends the response to the client.
 */
function sendResponse(res, status, body) {
  if (!res.headersSent) {
    if (body) {
      return res.status(status).json(body);
    }

    return res.status(status).send();
  } else {
    logger.error('Response already sent.');
  }
}

/*
 * These methods are called to respond to the API user with the information on
 * what is the result of the incomming request
 */
Responder.success = (res, message) => {
  message = _.isString(message) ? {message} : message;
  return sendResponse(res, 200, message);
};

Responder.created = (res, object) => {
  return sendResponse(res, 201, object);
};

Responder.deleted = (res) => {
  return sendResponse(res, 204);
};

Responder.notFound = (req, res) => {
  return sendResponse(res, 404, {reason: 'Not Found'});
};

Responder.operationFailed = (res, reason) => {
  const status = reason.status;
  logger.error(reason);
  reason = reason.message || reason;
  return sendResponse(res, status || 400, {reason});
};

module.exports = Responder;
