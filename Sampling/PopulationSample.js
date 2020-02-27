const srt = require('./SimpleSample')
const ci = require('./ConfidenceInterval')
const cochran = require("../Sampling/Cochran")
const  { jStat } = require('jstat');
const stats = require('../calculation/StatisticsOperation')
const path = require('path')

class PopulationSample{
    static simpleRandomTest(arr,samplesize){
        return srt(arr,samplesize)
    }

    static  confidenceInterval(arr, cL){
        return ci.tDistribution(arr,cL)
    }

    static cochran(zScore, cL,p){
        return Math.ceil(cochran(zScore,p,1-cL))
    }

}
var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
let newArr =PopulationSample.simpleRandomTest(sourceArr,5)
console.log(newArr)

module.exports = PopulationSample;

