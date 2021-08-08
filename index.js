// setting up whats needed for file
const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const generateHtml = require('./utils/generateHtml')
const path = require('path')

//manager sign-in questions 
const passcode = [
    {
            type: 'input',
            name: 'name',
            message: 'Enter your name.',
          },
          {
            type: 'input',
            name: 'number',
            message: 'Enter your ID number.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'Enter your email.',
          },
          {
            type: 'input',
            name: 'office',
            message: 'Enter your office number.',
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
  type: 'input',
  name: 'git',
  message: 'What is the engineers Github username?',
  },
  {
    type: 'input',
    name: 'enId',
    message: "What is the engineers Id number?",
    },
    {
      type: 'input',
      name: 'enOffice',
      message: "What their office number?",
      },
  {
    type: 'input',
    name: 'enEmail',
    message: "What is their email?",
    }
  

];

const internQ = [
  {
    type: 'input',
      name: 'inName',
      message: "What is the interns name",
  },

  {
    type: 'input',
      name: 'school',
      message: "What school do they go to?",
  },

  {
    type: 'input',
      name: 'inId',
      message: "What the interns Id number?",
  },

  {
    type: 'input',
      name: 'inEmail',
      message: "What their email?",
  },

];

//empty array for new employee
let employeeNew = [];

//passcode function
function signIn() {
  inquirer.prompt(passcode).then(() =>{
    return console.log("Opening menu")
  });
};

//menu
function runMenu() {
  inquirer.prompt(menu).then((data) =>{
    if (answer === 'Engineer') {
      inquirer.prompt(engineerQ)}
      else if (answer === 'Intern') {
        inquirer.prompt(internQ)}
         else {
           return inquirer.prompt(menu)
         }
      });
};


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

