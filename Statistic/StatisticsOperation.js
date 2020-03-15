const Calculator = require("../basicCalculation/Calculator")
const  { jStat } = require('jstat');
const  ss = require('simple-statistics');

/**
 * @constructor StatisticsOperation
 * @extends Calculator
 */
class StatisticsOperation extends Calculator {
    constructor() {
        super();
    }

    /**
     * Returns the mean of the array
     * @param {array} List - array of Numbers
     * @return {number} mean - mean of the list
     */
     mean(arr =[]){
        return super.sumList(arr) / arr.length;
    }

    /**
     * Returns the variance of the array
     * @param {array} List - List of Numbers
     * @return {array} variance - variance of of numbers
     */
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

    /**
     * Returns the standard deviation of the array
     * @param {array} list list of number
     * @return {number} - standard deviation of list
     */
     stdev(arr){
        let size = arr.length;
        let  varianceSumResult = super.sumList(this.variance(arr));
        let result = super.squareRoot(super.Divide(varianceSumResult,size));
        return result;
    }

    /**
     * Returns the median of the array
     * @param {array} list list of number
     * @return {number} median
     */
     median(arr){
       return ss.median(arr)
    }

    /**
     *  Returns the value of x in the cdf of the Normal distribution with parameters mean and std (standard deviation).
     * @param  {array} list  list of number
     * @return {number} - Normal Density of distribution of number
     */
     normPdf(xArr){
        return xArr.map((value) => {
            return jStat.normal.pdf(value,this.mean(xArr),this.stdev(xArr));
        })
    }

    /**
     * Returns the z-score of value taking the jStat object as the observed values.
     * @param  {number} num the number for z-score in the list
     * @param {array} arr the list of number
     * @return {number} z-score
     */
     zScore(x,arr){
        return (x - this.mean(arr)) / this.stdev(arr);
    }

    /**
     * Returns the quartiles of the array
     * @param {array} list list of number
     * @return {array}  [Q1, q2, q3]
     */
     quartiles(arr){
        let middle = Math.round(arr.length/2);
        let q1 = this.median(arr)
        let q2 = this.median(arr.slice(0,middle-1))
        let q3 = this.median(arr.slice(middle+1,arr.length -1))
        return [q1,q2,q3].sort();
    }
    // Skewness
    /**
     * Returns the skewness of the array
     * @param {array} arr list of number
     * @return {number} - skewness of number
     */
     skewness(arr){
        return ss.sampleSkewness(arr);
    }
    // Sample Correlation
    /**
     *calculates sample corrlation
     * @param {array} set1 list of number
     * @param {array} set2 list of number
     * @return {number} - sample-correlation
     */
     sampleCorrlation(set1,set2){
        let result = ss.sampleCorrelation(set1,set2).toFixed(3);
        return parseFloat(result);
    }

    /**
     * calculates population correlation
     * @param {array} arr1 list of numbers
     * @param {array} arr2 list of numbers
     * @return {number} - correlation of number
     */
    // Population Correlation
     populationCorrelation(arr1, arr2){
        return jStat.corrcoeff(arr1,arr2)
    }
    // Mean Deviation / Mean Absolute Deviation
    /**
     * calculates Mean Deviation / Mean Absolute Deviation
     * @param {array} arr list of number
     * @return {number}  - mean standard deviation of number
     */
     meanStdev(arr){
        return jStat.stdev(arr);
    }

    /**
     * Returns the mode of the array
     * @param {array} arr list of numbers
     * @return {number} - the mode of list
     */
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