const Calculator = require("../basicCalculation/Calculator")
const  { jStat } = require('jstat');
const  ss = require('simple-statistics');

class StatisticsOperation extends Calculator {
    constructor() {
        super();
    }


     mean(arr =[]){
        return super.sumList(arr) / arr.length;
    }
    
     variance(arr){
        let mean = this.mean(arr);

        let variance = arr.map((value)=>
        {
            if(typeof value === 'number'){
                return super.square(value - mean);
            }
        }).filter(value=> value != NaN);
        
        return variance;
    }
     stdev(arr){
        let size = arr.length;
        let  varianceSumResult = super.sumList(this.variance(arr));
        let result = super.squareRoot(super.Divide(varianceSumResult,size));
        return result;
    }
     median(arr){
       return ss.median(arr)
    }
     normPdf(xArr){
        return xArr.map((value) => {
            return jStat.normal.pdf(value,this.mean(xArr),this.stdev(xArr));
        })
    }

     zScore(x,arr){
        return (x - this.mean(arr)) / this.stdev(arr);
    }

     quartiles(arr){
        let middle = Math.round(arr.length/2);
        let q1 = this.median(arr)
        let q2 = this.median(arr.slice(0,middle-1))
        let q3 = this.median(arr.slice(middle+1,arr.length -1))
        return [q1,q2,q3].sort();
    }
    // Skewness
     skewness(arr){
        return ss.sampleSkewness(arr);
    }
    // Sample Correlation
     sampleCorrlation(set1,set2){
        let result = ss.sampleCorrelation(set1,set2).toFixed(3);
        return parseFloat(result);
    }

    // Population Correlation
     populationCorrelation(arr1, arr2){
        return jStat.corrcoeff(arr1,arr2)
    }
    // Mean Deviation / Mean Absolute Deviation
     meanStdev(arr){
        return jStat.stdev(arr);
    }
     mode(arr){
        return jStat.mode(arr)
    }
     toString (arr,func){
        let result = func(arr)
        console.log("function name: " + func.name + " result is : " + result )
    }
}

// let sourceArr1 = [37,32,77,9,33,27,62,35,23,18,61];
// let sourceArr2 = [69,58,36,66,86,38,83,16,50,38,86];
// var seq = jStat.seq( 0, 10, 11 );
//
// let number = jStat.corrcoeff( seq, seq )
// console.log(number)
module.exports = StatisticsOperation;