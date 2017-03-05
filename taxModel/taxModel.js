const taxModel = {
  taxRates: [
    {
      "tier": 1,
      "income_min": 0,
      "income_max": 18200,
      "base_amount": 0,
      "rate": 0
    },
    {
      "tier": 2,
      "income_min": 18201,
      "income_max": 37000,
      "base_amount": 0,
      "rate": 0.19
    },
    {
      "tier": 3,
      "income_min": 37001,
      "income_max": 87000,
      "base_amount": 3571.81,
      "rate": 0.325
    },
    {
      "tier": 4,
      "income_min": 87001,
      "income_max": 180000,
      "base_amount": 19821.485,
      "rate": 0.37
    },
    {
      "tier": 5,
      "income_min": 180001,
      "income_max": Infinity,
      "base_amount": 54231.115,
      "rate": 0.45
    }
  ],
  medicareLevy: [
    {
      "tier1": 1,
      "income_min": 0,
      "income_max": 21336,
      "base_amount": 0,
      "rate": 0
    },
    {
      "tier1": 2,
      "income_min": 21337,
      "income_max": 26668,
      "base_amount": 0,
      "rate": 0.1
    },
    {
      "tier1": 3,
      "income_min": 26669,
      "income_max": Infinity,
      "base_amount": 533.1,
      "rate": 0.02
    }
  ],
  superAnnuation: {
    "rate": 0.095
  }
}


module.exports = taxModel;
