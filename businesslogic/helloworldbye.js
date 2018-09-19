const moment = require('moment')
function method1(){
    console.log("Inside Method 1", moment.utc().format());
}

function method2(){
    console.log("Inside Method 2", moment.utc().format());
}

function method3(){
    console.log("Inside Method 3", moment.utc().format());
}

module.exports = {
    method1: method1,
    method2: method2,
    method3: method3
}
