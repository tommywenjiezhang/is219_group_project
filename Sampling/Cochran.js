let math  = require('../calculation/MathOperation')


module.exports = function(zScore, p, e){

    return (math.square(zScore) * p *(1-p))/math.square(e);

}