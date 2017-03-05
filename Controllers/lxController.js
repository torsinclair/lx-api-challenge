var lxController = function(helpers) {

  var getReverseWords = function(req,res){
    let word = req.params.word;
    res.status(200)
    res.send(helpers.reverseSentence(word));
  }
  var getSortWords = function(req,res){
    let word = req.params.word;
    res.status(200)
    res.send(helpers.sortSentence(word));
  }
  var getAfterTaxIncome = function(req,res){
    let income = +req.params.income;
    if(typeof income !== 'number') {
      res.status(500).send(err);
    } else {
      res.status(200)
      res.json(helpers.calculateAfterTaxIncome(income))
    }
  }
  return {
    getReverseWords: getReverseWords,
    getSortWords: getSortWords,
    calculateAfterTaxIncome: calculateAfterTaxIncome
  }
}

module.exports = lxController;
