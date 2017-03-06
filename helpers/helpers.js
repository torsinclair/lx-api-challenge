let _ = require('lodash');
var taxModel = require('../taxModel/taxModel');
var accounting = require('accounting');

const helpers = {
  /*  Reverse a string. Punctuation such as full stops,
  exclamation marks, question marks, double quotes and commas
  should remain in position.
  Apostrophes should be treated as other characters. */
  reverseSentence: function(sentence) {
    return sentence.replace(/[A-Za-z0-9']+/ig, function(w){
      return w.split('').reverse().join('')
    });
  },
  /*  Sort a string. Punctuation such as full stops,
  exclamation marks, question marks, double quotes and commas
  should remain in position.
  Apostrophes should be treated as other characters. */
  sortSentence: function(sentence) {
    return sentence.replace(/[a-z']+/ig, function(w){
      return w.split('').sort(function(a,b){
        a = a.toLowerCase();
        b = b.toLowerCase();
        if (a === b) return 0;
        if ( a > b ) return 1;
        return -1;
      }).join('')
    });
  },
  /*  Given a gross income, return:
  baseSalary:
  superannuation:
  taxes:
    income:
    medicare:
    total:
  postTaxIncome: */
  calculateAfterTaxIncome(income) {
    let incomeBracket = _.filter(taxModel.taxRates, function(rate){
      return +rate.income_min <= income && income <= +rate.income_max;
    })
    let medicareLevy = _.filter(taxModel.medicareLevy, function(levy){
      return +levy.income_min <= income && income <= +levy.income_max;
    })
    let superAnnuation = +taxModel.superAnnuation.rate;
    let incomeTax = Math.ceil((income - incomeBracket[0].income_min) * incomeBracket[0].rate + incomeBracket[0].base_amount);
    let medicareTax = Math.ceil((income - medicareLevy[0].income_min) * medicareLevy[0].rate + medicareLevy[0].base_amount);
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
