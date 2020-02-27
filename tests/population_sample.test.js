var ps = require('../Sampling/PopulationSample')

describe('sample random  sampling', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('arrary length', () => {
        var testArr = ps.simpleRandomTest(sourceArr,5)
        expect(testArr.length).toBe(5);
    });

    test('if there is duplicated', () => {
        var testArr = ps.simpleRandomTest(sourceArr,5)
        let isDuplicated = testArr.every((value) => testArr.indexOf(value) != testArr.lastIndexOf(value));
        expect(isDuplicated).toBeFalsy()
    });

    test('if ERROR is thrown when smaple size ', () => {
        var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
       expect(()=>{ps.simpleRandomTest(sourceArr,sourceArr.length+1)}).toThrowError("Sample size cannot be greater than arr size ")
    });
});


describe('confidence interval', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('result test', () => {
        var result = ps.confidenceInterval(sourceArr,0.95)
        expect(result[0]).toBeCloseTo(12.8)
    });

    test('confidence level greater 1 reject', () => {
        expect(()=>{ps.confidenceInterval(sourceArr,2)}).toThrowError()
    });
});

describe('Cochran', () => {
    var sourceArr= [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
    test('result test', () => {
        var result = ps.cochran(1.96,0.95,0.5)
        expect(result).toBeCloseTo(385)
    });
});


