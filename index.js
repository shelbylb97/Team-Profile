// setting up whats needed for file
const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const generateHtml = require('./utils/generateHtml')
const path = require('path')

//inquirer questions 
const questions = [
    {
            type: 'input',
            name: 'name',
            message: 'What is the team members name?',
          },
          {
            type: 'input',
            name: 'number',
            message: 'What is ${data.name}s employee number?',
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is ${data.name}s email?',
          },
          {
            type: 'input',
            name: 'office',
            message: 'What is ${data.names}s office number?',
          },   
];


// menu for engineer and intern 
const menu = [
 
  {
   type: 'list',
   name: 'pick',
   message: 'What did you learn from this project?',
   choices: ['intern', 'engineer', 'finish team']
 },
];

// engineer questions 
const engineerQ = [
  {
  type: 'input'
  name: 'git'
  message: "What is the engineers Github username?"
  };
  {
    type: 'input'
    name: 'enId'
    message: "What is the engineers Id number?"
    };
    {
      type: 'input'
      name: 'enOffice'
      message: "What their office number?"
      };
  {
    type: 'input'
    name: 'enEmail'
    message: "What is their email?"
    };
  

]


//helper function 

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//function to initialize 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Creating Team Roster')
        const returnedItem = generateHtml(data);

        writeToFile('./output/roster.html', returnedItem)
       
    })
}

//function call init
 init();

