const Employee = require('./Employee'); 

class Engineer extends Employee {
    constructor(){

    }


    getRole(){
        return 'Engineer'
    }
}

module.exports = Engineer;