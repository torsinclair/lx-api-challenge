let _ = require('lodash');
var taxModel = require('../taxModel/taxModel');
var accounting = require('accounting');

const helpers = {
  reverseSentence: function(sentence) {
    return sentence.replace(/[a-z']+/ig, function(w){
      return w.split('').reverse().join('')
    });
  },
  sortSentence: function(sentence) {
    return sentence.replace(/[a-z']+/ig, function(w){
      return w.split('').sort().join('')
    });
  },
  calculateAfterTaxIncome(income) {
    let incomeBracket = _.filter(taxModel.taxRates, function(rate){
      return +rate.income_min < income && income < +rate.income_max;
    })
    let medicareLevy = _.filter(taxModel.medicareLevy, function(levy){
      return +levy.income_min < income && income < +levy.income_max;
    })
    let superAnnuation = +taxModel.superAnnuation.rate;
    let incomeTax = (income - incomeBracket[0].income_min) * incomeBracket[0].rate + incomeBracket[0].base_amount;
    let medicareTax = (income - medicareLevy[0].income_min) * medicareLevy[0].rate + medicareLevy[0].base_amount;
    let takeHomeCalculation = {
      baseSalary: income,
      superannuation: income * superAnnuation,
      taxes: {
        income: incomeTax,
        medicare: medicareTax,
        total: incomeTax + medicareTax
      },
      postTaxIncome: income - incomeTax - medicareTax
    }
    return takeHomeCalculation;
  }
}

module.exports = helpers;
