var express = require('express');

var routes = function(helpers){
  var lxRouter = express.Router();
  var lxController = require('../Controllers/lxController')(helpers);
  lxRouter.route('/')
    .get(function(req,res){
      res.send('Welcome to the implementation of the LX API Challenge');
    });

  lxRouter.route('/reverse-words/:word')
    .get(lxController.getReverseWords);

  lxRouter.route('/sort-words/:word')
    .get(lxController.getSortWords);

  lxRouter.route('/calculate-after-tax-income/:income')
    .get(lxController.getAfterTaxIncome);

    return lxRouter;
};

module.exports = routes;
