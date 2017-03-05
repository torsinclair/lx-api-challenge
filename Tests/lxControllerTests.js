var should = require('should');
var sinon = require('sinon');
var helpers = require('../helpers/helpers');
var chai = require('chai');

describe('lxController Tests', function(){
  describe('getReverseWords', function(){
    it('should return Response Class Status 200', function(){
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getReverseWords(req,res);
      res.status.calledWith(200).should.equal(true, 'Status ' + res.status.args[0][0]);
    })
    it('should not reverse punctuations', function(){
      var expect = chai.expect;
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getReverseWords(req,res);
      //sinon.assert.calledWith(req.params.word).should.equal(res.send.args[0][0])
      //res.send.calledWith(res.send.args[0][0]).should.equal(true, 'Status ' + 's\'XL daeh eciffo si detacol ni yendyS, ailartsuA.');
      //res.send.calledWith(res.send.args[0][0]).to.eql(['s\'XL daeh eciffo si detacol ni yendyS, ailartsuA.'])
    })
  })
  describe('getSortWords', function(){
    it('should return Response Class Status 200', function(){
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getSortWords(req,res);
      res.status.calledWith(200).should.equal(true, 'Status ' + res.status.args[0][0]);
    })
    it('should not sort punctuations', function(){
      var expect = chai.expect;
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getSortWords(req,res);
      //sinon.assert.calledWith(req.params.word).should.equal(res.send.args[0][0])
      //res.send.calledWith(res.send.args[0][0]).should.equal(true, 'Status ' + 's\'XL daeh eciffo si detacol ni yendyS, ailartsuA.');
      //res.send.calledWith(res.send.args[0][0]).to.eql(['s\'XL daeh eciffo si detacol ni yendyS, ailartsuA.'])
    })
  })
  describe('getAfterTaxIncome', function(){
    it('should return Response Class Status 200', function(){
      var req = {
        params: {
          income: 100000
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getAfterTaxIncome(req,res);
      res.status.calledWith(200).should.equal(true, 'Status ' + res.status.args[0][0]);
    })
    it('should return after tax income', function(){
      var expect = chai.expect;
      var req = {
        params: {
          income: 100000
        }
      }
      var res = {
        status: sinon.spy(),
        send: sinon.spy()
      }
      var lxController = require('../Controllers/lxController')(helpers);
      lxController.getAfterTaxIncome(req,res);
      //sinon.assert.calledWith(req.params.word).should.equal(res.send.args[0][0])
      //res.send.calledWith(res.send.args[0][0]).should.equal(true, 'Status ' + 's\'XL daeh eciffo si detacol ni yendyS, ailartsuA.');
      //res.send.calledWith(res.send.args[0][0]).to.eql(['s\'XL daeh eciffo si detacol ni yendyS, ailartsuA.'])
    })
  })
})
