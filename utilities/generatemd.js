// write a function that takes in 1 paramater and returns a string literal. string literal prints the way it prints in readme
var fs = require("fs");
var path = require("path");

function generatestring(answers) {
  return `
        # ${answers.title}

        ## Description
        ${answers.description}

        ## Table of Contents
        - [Installation](#Installation)
        - [Usage](#Usage)
        - [License](#License)
        - [Contributing](#Contributing)
        - [Tests](#Tests)
        - [Questions](#Questions)

        ## Installation
        To Install necessary dependencies, run this command
        \`\`\`
        ${answers.installation}
        \`\`\`

        ## Usage
        ${answers.usage}

        ## License
        ${answers.license}

        ## Contributing
        ${answers.contributing}

        ## Tests
        To run Test, run this command
        \`\`\`
        ${answers.tests}
        \`\`\`

        ## Questions
        If you have questions about this project, please contact ${answers.email}
        ![alt text](${answers.avatar_url})
    `;
}
function generatemarkdown(answers, filename) {
  var string = generatestring(answers);
  return fs.writeFileSync(path.join(process.cwd(), filename), string);
}
//export function
module.exports = generatemarkdown;
