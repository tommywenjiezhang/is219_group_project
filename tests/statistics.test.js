const Stats= require('../calculation/StatisticsOperation');

test('Statistic Calculator Mean', () => {
    expect(Stats.mean([7,9,12,13,14,15])).toBeCloseTo(11.666666666667, 5);
});


test('Statistic Calculator stdev', () => {
    expect(Stats.stdev([7,9,12,13,14,15])).toBeCloseTo(2.808716591, 5);
});


test('Statistic Calculator normalPdf', () => {
    let sourceArr = [7,9,12,13,14,15];
    let testArr = Stats.normPdf(sourceArr);
    let resultArr = [0.03573739, 0.09052359,0.14103682,0.12688766,0.10056680,0.07021634]
    for(var i = 0; i < sourceArr.length; i++){
        expect(testArr[i]).toBeCloseTo(resultArr[i], 3);
    }
});

test('Statistic Calculator z-score', () => {
    let sourceArr = [7,9,12,13,14,15];
    let test = Stats.zScore(11, sourceArr);
    let result = -0.23735;
    expect(test).toBeCloseTo(result, 3);

});

test('Statistic Calculator median', () => {
    let sourceArr = [7,9,12,13,14,15];
    let test = Stats.median(sourceArr);
    let result = 12.5;
    expect(test).toBeCloseTo(result, 1);

});

test('Statistic Calculator sample coffieicent', () => {
    let sourceArr1 = [37,32,77,9,33,27,62,35,23,18,61];
    let sourceArr2 = [69,58,36,66,86,38,83,16,50,38,86];
    let test = Stats.sampleCorrlation(sourceArr1,sourceArr2);
    let result = 0.1785;
    expect(test).toBeCloseTo(result, 2);

});

test('Statistic Calculator population coffieicent', () => {
    let sourceArr1 = [37,32,77,9,33,27,62,35,23,18,61];
    let sourceArr2 = [69,58,36,66,86,38,83,16,50,38,86];
    let test = Stats.populationCorrelation(sourceArr1,sourceArr2);
    let result = 0.1785;
    expect(test).toBeCloseTo(result, 1);

});

test('Statistic Calculator quartile', () => {
    let sourceArr = [9,18,23,27,32,33,35,37,61,62,77];
    let test = Stats.quartiles(sourceArr);
    let result = [23,33,61];
    expect(test).toEqual(result);

});

test('Statistic Calculator skewness', () => {
    let sourceArr = [9,18,23,27,32,33,35,37,61,62,77];
    let test = Stats.skewness(sourceArr);
    let result = 0.724284
    expect(test).toBeCloseTo(result, 2);

});

test('Statistic Calculator Mean Dev', () => {
    let sourceArr = [10, 12, 23, 23, 16, 23, 21, 16];
    let test = Stats.meanStdev(sourceArr);
    let result = 4.8989794855664
    expect(test).toBeCloseTo(result, 2);

});

test('Statistic Calculator mode', () => {
    let sourceArr = [10, 12, 23, 23, 16, 23, 21, 16];
    let test = Stats.mode(sourceArr);
    let result = 23
    expect(test).toBeCloseTo(result);
});