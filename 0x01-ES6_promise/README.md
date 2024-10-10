# 0x01. ES6 Promises

## Project Overview

This project focuses on understanding and implementing ES6 Promises in JavaScript. The goal is to learn how to create and manage asynchronous operations using Promises, enhancing the ability to handle asynchronous code more effectively. The project took place from October 1, 2024, 6:00 AM to October 3, 2024, 6:00 AM.

### Auto Review

An auto-review will be launched at the deadline with the following scores:

- Total: 0.0/26 mandatory & 0.0/4 optional
- Overall: 0.0%
- Mandatory: 0.0%
- Optional: 0.0%
- Calculation: 0.0% + (0.0% * 0.0%) == 0.0%

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without the help of Google:

- Promises: how, why, and what
- Usage of `then`, `resolve`, and `catch` methods
- Every method of the Promise object
- `Throw / Try` concepts in error handling
- The `await` operator and how to use async functions

## Resources

### Read or Watch

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://www.youtube.com/watch?v=DHvZLI7Db8E)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Requirements

- All files must be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A `README.md` file, at the root of the project folder, is mandatory.
- All code should use the `.js` extension.
- Code will be tested using Jest with the command `npm run test`.
- Code will be verified against lint using ESLint.
- All functions must be exported.

## Setup

### Install NodeJS 12.11.x

In your home directory, run the following commands:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify the installation:

bash
Copy code
nodejs -v  # v12.11.1
npm -v     # 6.11.3
Install Jest, Babel, and ESLint
In your project directory, install Jest, Babel, and ESLint by using the supplied package.json and run:

bash
Copy code
npm install
Configuration Files
Add the following files to your project directory:

package.json
babel.config.js
utils.js: Use this when you reach tasks requiring uploadPhoto and createUser.
.eslintrc.js
Don't forget to run npm install when you have the package.json.

Response Data Format
uploadPhoto returns a response in the format:

json
Copy code
{
  "status": 200,
  "body": "photo-profile-1"
}
createUser returns a response in the format:

json
Copy code
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
Tasks
0. Keep every promise you make and only make promises you can keep
Mandatory

Implement a function getResponseFromAPI() that returns a Promise.
1. Don't make a promise...if you know you can't keep it
Mandatory

Implement getFullResponseFromAPI(success) which resolves or rejects a Promise based on the boolean input.
2. Catch me if you can!
Mandatory

Implement handleResponseFromAPI(promise) to handle Promise resolutions and rejections.
3. Handle multiple successful promises
Mandatory

Implement handleProfileSignup() to resolve multiple promises and log employee data.
4. Simple promise
Mandatory

Implement signUpUser(firstName, lastName) to return a resolved promise with user data.
5. Reject the promises
Mandatory

Implement uploadPhoto(filename) to return a rejected Promise with an error message.
6. Handle multiple promises
Mandatory

Implement handleProfileSignup() to handle multiple promises and return their statuses.
7. Load balancer
Mandatory

Implement loadBalancer(chinaDownload, USDownload) to return the first resolved promise value.
8. Throw error / try catch
Mandatory

Implement divideFunction(numerator, denominator) to handle division and throw an error if division by zero occurs.
9. Throw an error
Mandatory

Implement guardrail(mathFunction) to handle execution and error logging.
Repository
GitHub Repository: alx-backend-javascript
Directory: 0x01-ES6_promise
markdown
Copy code

### Explanation of the Structure

- **Project Overview**: Provides a summary and timeline for the project.
- **Learning Objectives**: Clearly outlines the skills to be gained.
- **Resources**: Links to important readings and videos to understand the project concepts.
- **Requirements**: Lists technical specifications for running the project.
- **Setup**: Step-by-step guide to install necessary software.
- **Response Data Format**: Explains the expected format for API responses.
- **Tasks**: Describes each task in a structured manner, highlighting their mandatory nature.
- **Repository**: Links to the GitHub repository where the project code is stored.
