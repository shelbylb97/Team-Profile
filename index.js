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
            message: 'manager sign in. enter your name.',
          },
          {
            type: 'input',
            name: 'number',
            message: 'enter your ID number.',
          },
          {
            type: 'input',
            name: 'email',
            message: 'enter your email.',
          },
          {
            type: 'input',
            name: 'office',
            message: 'enter your office number.',
          },   
];


// menu for engineer and intern 
const menu = [
 
  {
   type: 'list',
   name: 'pick',
   message: 'what would you like to do',
   choices: ['add intern', 'add engineer', 'finish team']
 },
];

// engineer questions 
const engineerQ = [
  {
    type: 'input',
    name: 'enName',
    message: 'role set to engineer. enter employee name',
    },
  {
  type: 'input',
  name: 'github',
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
    // {
    //   type: 'list',
    //   name: 'enDone',
    //   message: "Are you done building your team?",

    //   }
  

];

const internQ = [
  {
    type: 'input',
    name: 'inName',
    message: 'role set to intern. enter employee name',
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
  inquirer.prompt(passcode).then((response) =>{
  
    const manager =  new Manager(response.name, response.number, response.email, response.office)
      console.log(manager)
      employeeNew.push(manager);
    //return console.log("Opening menu")
    runMenu();
  });
};

//engineer funtion need to push to empty array
function engQs() {
  inquirer.prompt(engineerQ).then((data) =>{
    const engineer = new Engineer(data.enName, data.enId, data.enEmail, data.enOffice, data.github)
    employeeNew.push(engineer)
    runMenu();
  })
};

//intern function 
function intQs() {
  inquirer.prompt(internQ).then((data) =>{
    const intern = new Intern(data.inName, data.inId, data.inEmail, data.school)
    employeeNew.push(intern)
    runMenu();
    
  })
};

//menu
// function runMenu() {
//   inquirer.prompt(menu).then((data) =>{
//     if (data.pick === 'add engineer') {
//       inquirer.prompt(engineerQ)}
//       else if (data.pick === 'add intern') {
//         inquirer.prompt(internQ)}
//          else {
//            console.log("saving team information")
//          }
//       });

// };
// trying a diff menu 

function runMenu(){
  inquirer.prompt(menu).then((data) =>{
    if (data.pick === 'add engineer'){
      engQs()
    }
    else if (data.pick === 'add intern'){
      intQs()
    }
    else {
      console.log("compiling team information")
      console.log('Creating Team Roster')
      const returnedItem = generateHtml(employeeNew);
      writeToFile('./output/roster.html', returnedItem)
    }
  })
  
  };


//helper function 

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//function to initialize 
function firstInit() {
  // inquirer.prompt(passcode).then((data) => {
    signIn();
      // console.log('Creating Team Roster')
      // const returnedItem = generateHtml(data);
      // writeToFile('./output/roster.html', returnedItem)
  //})
}


// function secondInit() {
//     inquirer.prompt(runMenu).then((data) => {
//         console.log('Creating Team Roster')
//         const returnedItem = generateHtml(data);

//         fs.appendFile('./output/roster.html', returnedItem)
       
//     });
// }

//function call init
 firstInit();


