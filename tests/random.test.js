let rand =  require("../Random/RandomFunction")


describe('Generate a random number without a seed between a range of two numbers - Both Integer and Decimal', () => {
    test.each([
        [2,5, true],
        [1,100, true],
        [2,200, true]
    ])('.randBetween(%i,%i)', (a, b,expected) => {
        expect(rand.rangeBetweenTwo(a,b)>= a && rand.rangeBetweenTwo(a,b) <= b).toBe(expected)
    });

    test('error is thrown when min > max ', () => {
       expect(()=>{rand.rangeBetweenTwo(10, 8)}).toThrow();
    });
});

describe('Generate a list of N random numbers with a seed and between a range of numbers - Both Integer and Decimal', () => {
    test.each([
        [4,5, 100,4],
        [3,5, 100,3],
        [10,5,100,10]
    ])('list of %i random numbers between(%i,%i)', (a, b,c,expected) => {
        expect(rand.generateRandomList(a,b,c).length).toBe(expected)
    });

    test('error is thrown when min > max ', () => {
        expect(()=>{rand.generateRandomList(2,11, 8)}).toThrow();
    });
});

describe('Select a random item from a list', () => {
    test('Select a random item from a list', () => {
        let source  =  [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
        expect(source.indexOf(rand.selectRandom(source))!=-1).toBeTruthy();
    });
});

describe('Select N number of items from a list without a seed', () => {
    test('Select N number of items from a list without a seed', () => {
        let source  =  [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
        expect(rand.selectNitem(source).every(value => source.indexOf(value)!=-1)).toBeTruthy();
    });
});

describe('Set a seed and randomly.select the same value from a list', () => {
    test('Set a seed and randomly.select the same value from a list', () => {
        let source  =  [3, 8, 11, 17, 19,8, 12, 13, 17, 20]
        let seedFunc = rand.seedRandom();
        seedFunc.seed(5)
        let choice1 = seedFunc.choice(source)
        let choice2 = seedFunc.choice(source)
        expect(choice1===choice2).toBeTruthy();
    });
});