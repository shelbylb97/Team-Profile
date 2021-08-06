// setting up whats needed for file
const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./Employee')
const Manager = require('./Manager')
const Intern = require('./Intern')
const Engineer = require('./Engineer')
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
          {
        //   type: 'input',
        //   name: 'learn',
        //   message: 'What did you learn from this project?',
        //   },
        //   {
        //   type: 'input',
        //   name: 'link1',
        //   message: 'Paste your github repo link here',
        
        //   },
        //   {
        //   type: 'input',
        //   name: 'link2',
        //   message: 'Paste your deployed site link here',
        //   },
        //   {
        //     type: 'input',
        //     name: 'screenshot',
        //     message: 'Paste the img link for the screenshot of your deployed site here',
        //     },
      
    
];

//helper function 

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//function to initialize 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('Creatinf Team Roster')
        const returnedItem = ;

        writeToFile('./output/roster.html', returnedItem)
       
    })
}

//function call init
 init();

