const  MathOperation = require('./MathOperation');
const  { jStat } = require('jstat');
const  ss = require('simple-statistics');

class StatisticsOperation{
    static mean(arr =[]){
        return MathOperation.sumList(arr) / arr.length;
    }
    
    static variance(arr){
        let mean = StatisticsOperation.mean(arr);

        let variance = arr.map((value)=>
        {
            if(typeof value === 'number'){
                return MathOperation.square(value - mean);
            }
        }).filter(value=> value != NaN);
        
        return variance;
    }
    static stdev(arr){
        let size = arr.length;
        let  varianceSumResult = MathOperation.sumList(StatisticsOperation.variance(arr));
        let result = MathOperation.squareRoot(MathOperation.quotient(varianceSumResult,size));
        return result;
    }
    static median(arr){
       return ss.median(arr)
    }
    static normPdf(xArr){
        return xArr.map((value) => {
            return jStat.normal.pdf(value,StatisticsOperation.mean(xArr),StatisticsOperation.stdev(xArr));
        })
    }

    static zScore(x,arr){
        return (x - StatisticsOperation.mean(arr)) / StatisticsOperation.stdev(arr);
    }

    static quartiles(arr){
        let middle = Math.round(arr.length/2);
        let q1 = StatisticsOperation.median(arr)
        let q2 = StatisticsOperation.median(arr.slice(0,middle-1))
        let q3 = StatisticsOperation.median(arr.slice(middle+1,arr.length -1))
        return [q1,q2,q3].sort();
    }
    // Skewness
    static skewness(arr){
        return ss.sampleSkewness(arr);
    }
    // Sample Correlation
    static sampleCorrlation(set1,set2){
        let result = ss.sampleCorrelation(set1,set2).toFixed(3);
        return parseFloat(result);
    }

    // Population Correlation
    static populationCorrelation(arr1, arr2){
        return jStat.corrcoeff(arr1,arr2)
    }
    // Mean Deviation / Mean Absolute Deviation
    static meanStdev(arr){
        return jStat.stdev(arr);
    }

    static toString (arr,func){
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