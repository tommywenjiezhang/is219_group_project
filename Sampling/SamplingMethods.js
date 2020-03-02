const srt = require('./SimpleSample')
const ci = require('./ConfidenceInterval')
const sysS= require("./SystemSample")
const cochran = require("../Sampling/Cochran")
const  { jStat } = require('jstat');
const stats = require('../calculation/StatisticsOperation')
const mE = require("./marginofError")

class SamplingMethods{
    static simpleRandomTest(arr,samplesize){
        return srt(arr,samplesize)
    }

    static  confidenceInterval(arr, cL){
        return ci.tDistribution(arr,cL)
    }

    static cochran(zScore, cL,p){
        return Math.ceil(cochran(zScore,p,1-cL))
    }

    static clWidth(W,cL ,p= 0.5,){
        return Math.ceil(ci.sampleSizeWithWidth(cL,W,p))
    }

    static sampleStd(cL,std ,E){
        return Math.ceil(ci.sampleSizeStd(std,cL,E))
    }
    static systemSampling(arr,size,start){
        return sysS(arr,size,start)
    }

    static marginOfError(std,size,z){
        return mE(std,size,z);
    }
}

module.exports = SamplingMethods;
