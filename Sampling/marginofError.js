const mo = require("../calculation/MathOperation")
module.exports = function(std, smapleSize,z){
    return  z * (std / mo.squareRoot(smapleSize))
}