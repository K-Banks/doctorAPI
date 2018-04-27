#### _Doctor API_

#### By: _**Kayl Eubanks**_

## Description

_This webpage application is designed to provide users with information about local doctors that are relevant to user submitted queries._

_This project uses the BetterDoctor API to get relevant information about local medical practioners that fit criteria submitted by user._

## Setup/Installation Requirement

* Clone repository on your local computer from https://github.com/K-Banks/doctorAPI.
* If you already have Node, Homebrew, and Karma installed, then skip to "Install Dependencies."

  #### Node: Windows / Linux Installation Instructions
  * To install Node on other systems, go to the <a href="https://nodejs.org/en/">Node website</a>, download and install the appropriate installer for your operating system.

  #### Node: OSX Installation Instructions
  * On OS X systems, install Node.js through Homebrew with the following command in your home directory:
    * $ brew install node
  * Confirm that node and npm (node package manager, installed automatically with Node) are in place by checking the versions (Node should be 4.0.x or higher, npm should be 3.6.x or higher):
    * $ node -v
    * $ npm -v

  #### Homebrew Installation
  * If you do not have Homebrew installed yet, you may install it by copying and pasting this command:
    * $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
  * Next, ensure Homebrew packages are run before the system versions of the same (which may be dated or not what we want) by executing the following:
    * $ echo 'export PATH=/usr/local/bin:$PATH' >> ~/.bash_profile

  #### Karma Installation
  * If you do not have Karma installed globally, then run the following:
    * $ npm install -g karma-cli

  #### Install dependencies
  * Enter the following code in the command line to install all dependencies:
    * $ npm install

  #### Linking API key
  * this application requires an API key to run properly
    * get a personal API key from https://developer.betterdoctor.com/
  * create a .env files
  * create a variable named 'exports.apiKey' and bind to your personal API keys
  * export the apiKey variable

  #### Working with the project in Node:
  * To build and bundle the project in webpack run the following:
    * $ npm run build
  * To run the local test server:
    * $ npm run start
  * To run test in Karma:
    * $ npm test



## Known Bugs

_No known bugs at this time._
_Please contact author at kayleubanks@gmail.com with any bugs._

## Technologies Used

| Development dependencies | Front end dependencies |
| :------------ | :------------- |
| * webpack | * bootstrap |
| * eslint | * jquery |
| * karma & jasmine | * popper
| * babel-loader |  |
| * css-loader & style-loader | | |
| * dot-env |  |


### Specs
| Behavior | Input | Output |
| :-------------     | :------------- | :------------- |
| The program will return first name, last name, address, phone number, website and patient load for any response with a doctor. | "Podiatrist" | "Dr. Meta Tarsal, 37 SW 28th, (888)-475-9087, MetatarsalRUs.com, currently accepting new patients." |
| The program will return list of qualified doctors based on submitted medical issue. | "Diabetes" | "Dr. Kid Knee, Endocrinologist; Dr. Lupe Henle, Endocrinologist" |
| The program will return list of doctors based on submitted name. | "Kid" | "Dr. Kid Knee, Endocrinologist; Dr. Kid Frendlie, Pediatrician" |
| The program will return a notification containing error information if an error occurred during search. | User submission: "Chest pain" | Error notification: "There was an error processing this request. Please try again. (Error message: unknownerror)" |
| The program will return a notification that no results were found if a query returns no results. | "Etymologist" | "No results were found for: Etymologist" |
| The program will return a list of doctors nearby user submitted location. | "Santa Ana, CA" | "Searching for doctors in: Santa Ana, CA" |


### License

This software is licensed under the MIT license.

Copyright (c) 2018 ****_Kayl Eubanks_****
