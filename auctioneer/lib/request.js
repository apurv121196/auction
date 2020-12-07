const request = require('request');

const getRequest = (url, body = {}, headers = {}) =>
  new Promise((resolve, reject) =>
    request.get(
      {
        method: 'GET',
        url,
        headers,
      },
      (error, response, body) => {
        if (error) reject(error);
        resolve(body);
      }
    )
  );

const postRequest = (url, body = {}, headers = {'Content-Type': 'application/json'}) =>
  new Promise((resolve, reject) =>
    request.post(
      {
        method: 'POST',
        url,
        headers,
        json: body,
      },
      (error, response, body) => {
        if (error) reject(error);
        resolve(body);
      }
    )
  );

module.exports = {getRequest, postRequest};
