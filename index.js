//Package variables
const inquire = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please provide a brief description of your project.',
        name: 'description',
    },

    {
        type: 'input',
        message: 'Please describe the installation process if any.',
        name: 'install',
    },    

    {
        type: 'input',
        message: 'Please provide instructions on how to use this project.',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'Please credit yourself and any collaboraters/resources in this section.',
        name : 'credits',
    },

    {
       type: 'list',
       message: 'Please select a license',
       choices: ['MIT', 'GNU GPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'Unlicense', 'None'],
       name: 'license'
    },

    {
        type: 'input',
        message: 'Please provide a test example to showcase the project.',
        name: 'test',
    },

    {
        type: 'input',
        message: 'Please provide your Github Username',
        name: 'username',
    },

    {
        type: 'input',
        message: 'Please provide your contact email',
        name: 'email',
    },
];

inquire.prompt(questions);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
