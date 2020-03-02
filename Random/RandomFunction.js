let rangeTwo = require('./rangeTwo')
let  gtl = require('./generateRandomList')
let sr = require("./selectRandom")
let SeedRand= require("./seedRandom")
let selectN = require('./selectNitem')

class RandomFunction{
    static rangeBetweenTwo(min,max){
        return rangeTwo(min,max)
    }

    static generateRandomList(n,min,max){
        return gtl(n,min,max)
    }
    static selectRandom(arr){
        return sr(arr)
    }
    static seedRandom(){
        return new SeedRand();
    }
    static selectNitem(arr,n){
        return selectN(arr,n)
    }

}

module.exports = RandomFunction;