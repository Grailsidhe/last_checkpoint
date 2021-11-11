const express = require('express');
const authRouter = express.Router();
const { login, forgotpassword, deleteUsers, users } = require('../Controller/auth');

authRouter.route('/adminlogin').post(login);
authRouter.route('/forgotpassword').post(forgotpassword);
authRouter.route('/:id').delete(deleteUsers);
authRouter.route('/').get(users);

module.exports = authRouter; 