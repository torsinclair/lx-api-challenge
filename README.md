Implement and setup hosting of an API conforming to this API
1. Get /reverse-words
Note: Punctuation such as full stops, exclamation marks, question marks, double quotes and commas should remain in postion. Apostrophes in the middle or end of a word should be reversed in the same way as other characters.
Example 1
Original: LX's head office is located in Sydney, Australia.
Reversed: s'XL daeh eciffo si detacol ni yendyS, ailartsuA.
Example 2
Original: Is the sentance "Hello World!" is often used in programming examples?
Reversed: sI eht ecnatnes "olleH dlroW!" si netfo desu ni gnimmargorp selpmaxe?
Response Class (Status 200)
string
2. Get /sort-words
Note: Punctuation such as full stops, exclamation marks, question marks, double quotes and commas should remain in postion. Apostrophes should be reversed in the same way as other characters.
Example 1
Original: LX's head office is located in Sydney, Australia.
Reversed: 'LsX adeh ceffio is acdelot in denSyy, Aaailrstu.
'
Example 2
Original: Is the sentance "Hello World!" is often used in programming examples?
Reversed: Is eht aceennst "eHllo dlorW!" is efnot desu in aggimmnoprr aeelmpsx?
Response Class (Status 200)
string
3. Get /calculate-after-tax-income
For the purposes of this test use the following tax brackets:
Taxample Income	Rate
$0 - $18,200	0%
$18,201 - $37,000	19%
$37,001 - $87,000	32.5%
$87,001 - $180,000	37%
Over $180,000	45%
The Australian tax rules specify that only whole dollars be taxed, e.g. $87,000.50 is taxed as $87,000.00.
In addition to basic income tax please also apply the medicare levy using the rules.
Taxample Income	Rate
Up to $21,336	0%
$21,336 to $26,668	10% of amount over $21,336
Over $26,668	2%
The medicare levey surcharge can be ignored as the rules for whether or not it applies are beyond the scope of this excersise.
Superannuation should be calculated as 9.5% on top of the base salary and rounded to the nearest cent.
Rounding
The ATO have a crazy rule where values above 0.159 are rounded up.
Medicare levy is rounded to the nearest cent.
Total taxes are the sum of income tax and medicare rounded to the nearest whole dollar.
Response Class (Status 200)
Take home pay calculation completed successfully.
