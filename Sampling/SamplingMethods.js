const srt = require('./methods/SimpleSample')
const Calculator = require("../basicCalculation/Calculator")
const ci = require('./methods/ConfidenceInterval')
const sysS= require("./methods/SystemSample")
const cochran = require("./methods/Cochran")
const  { jStat } = require('jstat');
const stats = require('../Statistic/StatisticsOperation')
const mE = require("./methods/marginofError")

class SamplingMethods extends Calculator{
     simpleRandomTest(arr,samplesize){
        return srt(arr,samplesize)
    }

      confidenceInterval(arr, cL){
        return ci.tDistribution(arr,cL)
    }

     cochran(zScore, cL,p){
        return Math.ceil(cochran(zScore,p,1-cL))
    }

     clWidth(W,cL ,p= 0.5,){
        return Math.ceil(ci.sampleSizeWithWidth(cL,W,p))
    }

     sampleStd(cL,std ,E){
        return Math.ceil(ci.sampleSizeStd(std,cL,E))
    }
     systemSampling(arr,size,start){
        return sysS(arr,size,start)
    }

     marginOfError(std,size,z){
        return mE(std,size,z);
    }
}

module.exports = SamplingMethods;
