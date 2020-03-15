
const jsdoc2md = require('jsdoc-to-markdown')



jsdoc2md.render(
    {files:["./Random/RandomCalculator.js", "./Statistic/StatisticsOperation.js","./basicCalculation/Calculator.js", "./Sampling/SampleCalculator.js"] }
    )
    .then( data => {
        console.log(data)
    })

