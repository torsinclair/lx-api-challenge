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
    });
    it('should return respond', function(){
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
      expect(res.send.calledOnce).to.equal(true);
    });
    it('should not reverse punctuations', function(){
      var expect = chai.expect;
      var assert = chai.assert;
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: function(){},
        send: function(){},
      }
      var lxController = require('../Controllers/lxController')(helpers);
      var reverseWord = helpers.reverseSentence(req.params.word);
      assert.equal(reverseWord, 's\'XL daeh eciffo si detacol ni yendyS, ailartsuA.')
    });
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
    });
    it('should return respond', function(){
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
      expect(res.send.calledOnce).to.equal(true);
    });
    it('should not reverse punctuations', function(){
      var expect = chai.expect;
      var assert = chai.assert;
      var req = {
        params: {
          word: 'LX\'s head office is located in Sydney, Australia.'
        }
      }
      var res = {
        status: function(){},
        send: function(){},
      }
      var lxController = require('../Controllers/lxController')(helpers);
      var reverseWord = helpers.sortSentence(req.params.word);
      assert.equal(reverseWord, '\'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.')
    });
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
    });
    it('should return respond', function(){
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
      expect(res.send.calledOnce).to.equal(true);
    });
    it('should return an object detailing income and tax', function(){
      var expect = chai.expect;
      var assert = chai.assert;
      var req = {
        params: {
          income: 92000
        }
      }
      var res = {
        status: function(){},
        send: function(){},
      }
      var lxController = require('../Controllers/lxController')(helpers);
      var incomeObject = helpers.calculateAfterTaxIncome(req.params.income);
      assert.deepEqual(incomeObject, {"baseSalary":92000,"superannuation":8740,"taxes":{"income":21672,"medicare":1840,"total":23512},"postTaxIncome":68488})
    });
  })
})
