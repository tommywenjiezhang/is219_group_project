
const fs = require('fs');
const mo = require("../calculation/MathOperation")
const stats = require("../calculation/StatisticsOperation")
class ConfidenceInterval{
    static tDistribution(arr, ci){
        let df = arr.length -1;
        if(ci> 1){
            throw new Error("Confidence Interval greater than 1")
        }
        else{
            let alpha = 1- ci;
            let data = fs.readFileSync(__dirname+ '/tDist.json');
            let tDisTable = JSON.parse(data);
            let tDist = null;
            let obj =   tDisTable[df.toString()]
            for(let key in obj){
                if(parseFloat(key) === alpha){
                    tDist = obj[key]
                    break;
                }
            }
            let divideSamplebyStd = stats.stdev(arr) / mo.squareRoot(arr.length);
            let multiplyByT = 0;
            if(tDist){
                multiplyByT = divideSamplebyStd * tDist;

            }
            let lowerSampleMean = stats.mean(arr) - multiplyByT;
            let upperSampleMean = stats.mean(arr) + multiplyByT;
            return [lowerSampleMean, upperSampleMean];
        }

    }
}


module.exports = ConfidenceInterval;
let number = [3, 8, 11, 17, 19,8, 12, 13, 17, 20];
stats.toString(number,stats.stdev);
stats.toString(number, stats.mean)
console.log(number.length)



