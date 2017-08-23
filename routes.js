const express = require('express');

const HomeController = require('./controllers/home');
const SweaterController = require('./controllers/sweater');


module.exports = function(app) {
    let homeRouter = express.Router();
    let sweaterRouter = express.Router();


  homeRouter.get('/', HomeController.home);

  sweaterRouter.get('/', SweaterController.list);
  sweaterRouter.post('/', SweaterController.add);
  sweaterRouter.get('/:id/delete', SweaterController.delete);
  sweaterRouter.get('/:id/update', SweaterController.update);
  sweaterRouter.post('/update', SweaterController.complete);



  app.use('/', homeRouter);
  app.use('/sweater/', sweaterRouter);


};
