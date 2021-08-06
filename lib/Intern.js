const Employee = require('./Employee'); 

class Intern extends Employee {
    constructor(){

    }


    getRole(){
        return 'Intern'
    }
}


module.exports = Intern;