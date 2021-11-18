# HOW TO INSTALL by using Yarn on Linux:
## Ensure yarn and node.js are installed on your computer
1. Open terminal and type : `cd /your/project/path`
2. Run `yarn add cypress --dev` to install cypress
3. Ensure these package already on package.json; `cypress`
4. Rename `.env.example` file to `cypress.env.json` and edit with your own credential (if any)
5. Run `yarn run cypress open` on terminal to run cypress test cases
6. Run `cypress run --browser chrome` to run all cases on `integration` directory with headless report

# HOW TO INSTALL by using NPM on Linux:
## Ensure npm and node.js are installed on your computer
1. Open terminal and type : `cd /your/project/path`
2. Run `npm install cypress --save-dev` to install cypress
3. Ensure these package already on package.json; `cypress`
4. Rename `.env.example` file to `cypress.env.json` and edit with your own credential (if any)
5. Run `npx cypress open` on terminal to run cypress test cases
6. Run `npm run cy:run --browser chrome` to run all cases on `integration` directory with headless report
