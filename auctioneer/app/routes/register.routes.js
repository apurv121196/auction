const express = require('express');
const { RegisterController } = require('../controllers/register.controller');

const initRegisterRoutes = () => {
  const registerRouter = express.Router();

  registerRouter.post('/', RegisterController.register);

  return registerRouter;
};

module.exports = initRegisterRoutes;
