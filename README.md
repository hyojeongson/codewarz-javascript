
# CodeWarz : javascript Algorithm Study! && CodeWars and TDD

### completed

- [x] the supermarket queue
- [x] get list sum recursively
- [x] beginner - reduce but grow 
- [x] largest 5 digit number in a series 

### String

- [x] FUNCTION 1 - HELLO WORLD
- [x] GRASSHOPPER - COMBINE STRINGS
- [x] SLEIGH AUTHENTICATION
- [x] HOW MANY LIGHTSABERS DO YOU OWN?
- [x] CONVERT BOOLEAN VALUES TO STRINGS 'YES' OR 'NO'.
- [x] Convert a Number to a String!
- [x] CONVERT A STRING TO A NUMBER!
- [x] GET PLANET NAME BY ID
- [x] PLURAL
- [x] SHORT LONG SHORT
- [x] Jenny's secret message
- [x] Are You Playing Banjo?
- [x] DOUBLE CHAR
- [x] STRINGY STRINGS

### Number

- [x] FUNCTION 2 - SQUARING AN ARGUMENT
- [x] FUNCTION 3 - MULTIPLYING TWO NUMBERS
- [x] OPPOSITE NUMBER
- [x] RETURN NEGATIVE
- [x] Even or Odd
- [x] Watermelon
- [x] NUMBER TOSTRING
- [x] DO I GET A BONUS?
- [x] FORMATTING DECIMAL PLACES #0
- [x] OPPOSITES ATTRACT
- [x] GRASSHOPPER - SUMMATION
- [x] FIND THE REMAINDER

### Array

- [x] LAST
- [x] COUNT THE MONKEYS!
- [x] SUM ARRAYS
- [x] PUSH A HASH/AN OBJECT INTO ARRAY
- [x] SENTENCE SMASH
- [x] COUNTING SHEEP...
- [x] Square(n) Sum
- [x] SUM OF POSITIVE
- [x] COUNT BY X
- [x] CONVERT NUMBER TO REVERSED ARRAY OF DIGITS
- [x] A NEEDLE IN THE HAYSTACK
- [x] FIND MAXIMUM AND MINIMUM VALUES OF A LIST
- [x] Constructor/Prototype
- [x] REGULAR BALL SUPER BALL
- [x] COLOR GHOST
- [x] BARKING MAD

### Function

- [x] A FUNCTION WITHIN A FUNCTION
- [x] THE 'IF’ FUNCTION
- [x] WELCOME TO THE CITY

### Install Mocha
```bash
npm install -g mocha
```

### Install Chai
```bash
npm install --save chai
```

#### Expect style
<a href="http://chaijs.com/api/bdd/">Expect</a>

#### Assert style
<a href="http://chaijs.com/api/assert/">Assert</a>


### CodeWars 문제 풀기
codewars 문제 제목으로 문제 파일과 test파일 만들기.
ex)8kyu Even or Odd라는 CodeWars문제가 있으면 아래 2개의 파일을 만듭니다.
```
even_or_odd.js
even_or_odd.test.js
```
`even_or_odd.js`에는 codewars에서 만들어야 하는 function을. 그리고 이것을 `module.exports`에 assign하세요
`even_or_odd.test.js`에는 이 function이 구현해야하는 spec을. spec을 test하기전에 even_or_odd.js에서 `module.exports`를 한 function을 `require`하세요

`even_or_odd`는 예제로 풀었습니다 참고하세요.

### Continuous Testing
```bash
mocha -w even_or_odd.*
```


### GitHub에 commit + push 하기
```bash
git add .
git commit -m 'even or odd'
git push origin master
```
