const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please enter your bio',
      name: 'bio',
    },
    {
        type: 'input',
        message: 'Please enter your LinkedIn URL',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'Please enter your Github URL',
        name: 'github',
    },
  ])
  .then((response) => {
    console.log(response)
  

 let data = `<!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>HTML Portfolio</title>
     <!-- Bootstrap CSS -->
     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
     <link rel="stylesheet" href="./assets/style.css">
 </head>
 <body>
     <div class="jumbotron">
         <h1 class="display-4">My name is ${response.name}</h1>
         <p class="lead">I live in ${response.location}</p>
         <p>My bio: ${response.bio}</p>
         <p>This is my LinkedIn URL: <a href="${response.linkedin}">${response.linkedin}</a></p>
         <p>This is my Github URL: <a href="${response.github}">${response.github}</a></p>
         <a href="${response.linkedin}"class="btn btn-primary btn-lg"  role="button">Learn more</a>
       </div>
 
     <script src="./assets/script.js"></script>
 </body>
 </html>`;

 fs.writeFile(`${response.name}.html`, data, function(err) {
     if(err) {
         console.error('error')
     }
     console.log('logged');
 })

}
);




