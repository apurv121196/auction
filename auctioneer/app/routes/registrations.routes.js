const express = require('express');
const RegistrationsController = require('../controllers/registrations.controller');

const initRegistrationsRoutes = () => {
  const registrationsRouter = express.Router();

  registrationsRouter.get('/', RegistrationsController.list);

  return registrationsRouter;
};

module.exports = initRegistrationsRoutes;
