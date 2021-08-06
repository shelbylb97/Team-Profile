// setting up whats needed for file
const fs = require('fs')
const inquirer = require('inquirer');
const Employee = require('./Employee')
const Manager = require('./Manager')
const Intern = require('./Intern')
const Engineer = require('./Engineer')
const generateHtml = require('./utils/generateHtml')

//inquirer questions 
const questions = [
    {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
          },
          {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
          },
          {
            type: 'input',
            name: 'git',
            message: 'What is your Github username?',
          },
          {
            type: 'input',
            name: 'bio',
            message: 'What is the purpose of your project?',
          },
          {
          type: 'input',
          name: 'learn',
          message: 'What did you learn from this project?',
          },
          {
          type: 'input',
          name: 'link1',
          message: 'Paste your github repo link here',
        
          },
          {
          type: 'input',
          name: 'link2',
          message: 'Paste your deployed site link here',
          },
          {
            type: 'input',
            name: 'screenshot',
            message: 'Paste the img link for the screenshot of your deployed site here',
            },
      
    
];

//helper function 

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

//function to initialize 
function init() {
    inquirer.prompt(questions).then((data) => {
        console.log('')
        const returnedItem = ;

        writeToFile('/result/README.md', returnedItem)
       
    })
}

//function call init
 init();

