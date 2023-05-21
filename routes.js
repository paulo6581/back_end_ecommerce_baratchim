const express = require("express");
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
const cadastrarController = require('./src/controllers/cadastrarController');
const {loginRequired} = require('./src/middlewares/middleware');

// Routes of Home
route.get('/', homeController.index);

// Routes of login
route.get('/login/index', loginController.index);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Routes of Cadastrar
route.get('/cadastrar/index', cadastrarController.index);
route.post('/cadastrar/register', cadastrarController.register);

module.exports = route; 