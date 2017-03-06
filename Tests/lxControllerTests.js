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
    })
  })
})
