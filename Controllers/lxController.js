/*
returns the get methods
wrapped in an external controller to enable testing
*/
var lxController = function(helpers) {
  /*  given a request string will return a response
      status 200 and the string reversed.
      Documented in helpers */
  var getReverseWords = function(req,res){
    let word = req.params.word;
    res.status(200)
    res.send(helpers.reverseSentence(word));
  }
  /*  given a request string will return a response
      status 200 and the string sorted.
      Documented in helpers */
  var getSortWords = function(req,res){
    let word = req.params.word;
    res.status(200)
    res.send(helpers.sortSentence(word));
  }
  /*  given a request income will return a response
      status 200 and an object containing tax details */
  var getAfterTaxIncome = function(req,res){
    let income = +req.params.income;
    if(typeof income !== 'number') {
      res.status(500).send(err);
    } else {
      res.status(200)
      res.send(helpers.calculateAfterTaxIncome(Math.floor(income)))
    }
  }
  return {
    getReverseWords: getReverseWords,
    getSortWords: getSortWords,
    getAfterTaxIncome: getAfterTaxIncome
  }
}

module.exports = lxController;
