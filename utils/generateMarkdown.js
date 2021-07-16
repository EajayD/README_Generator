// fucntion to create badge
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[![License](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)'
  }
}

// Function to render link to license details
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT](https://opensource.org/licenses/MIT)'
  }
}


//function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

${renderLicenseBadge(data.license)}

  ## Description 
  
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [License](#license)
  * [Testing](#testing)
  * [Questions](#questions)
  
  
  ## Installation
  
  ${data.install}

  ## Usage 
  
  ${data.usage}
  
  ## Contributing
  
  * **${data.credits}**
  
  
  ## License
  

  ${renderLicenseLink(data.license)}
  
  
  ---
  
  
  ## Testing
  
  ${data.test}

  ## Questions
  
  - [Link to Github](https://github.com/${data.username})

  or alternatively you can contact me with questions using the email listed below

  Email: ${data.email}


`;
}

module.exports = generateMarkdown;
