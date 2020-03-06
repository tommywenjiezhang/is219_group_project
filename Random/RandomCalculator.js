let rangeTwo = require('./methods/rangeTwo')
let  gtl = require('./methods/generateRandomList')
let sr = require("./methods/selectRandom")
let Calculator  = require('../basicCalculation/Calculator')
let SeedRand= require("./methods/seedRandom")
let selectN = require('./methods/selectNitem')

class RandomCalculator extends Calculator{
    rangeBetweenTwo(min,max){
        return rangeTwo(min,max)
    }

    generateRandomList(n,min,max){
        return gtl(n,min,max)
    }
    selectRandom(arr){
        return sr(arr)
    }
    seedRandom(){
        return new SeedRand();
    }
    selectNitem(arr,n){
        return selectN(arr,n)
    }

}

module.exports = RandomCalculator;