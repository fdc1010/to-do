# todo_app
A MEAN Stack To Do Application with Node Unit Testing for CRUD

###### What you need:
- NodeJS
- Angular CLI 10+
- MongoDB
- Your choice of IDE

## How to install
- Clone to project
- navigate to node_app using ```cd node_app``` in the CLI
- install node_modules using ```npm install``` in the CLI
- navigate to angular_todo using ``` cd ../angular_todo``` in the CLI
- install node_modules using ```npm install``` in the CLI

## How to run
- from the base folder node_todo navigate to node_app using ```cd node_app``` in the CLI
- input ```nodemon``` in the CLI
- navigate to angular_todo using ``` cd ../angular_todo```
- input ```ng s -o``` in the CLI to serve and open the application

## How to test
- from the base folder node_todo navigate to node_app using ```cd node_app```
- input ```npm test``` in the CLI to run the node unit testing

## Welcome to the “To Do Application”

#   I. About this document:
This document is to provide an overview of the project, the software and hardware requirements, and the related information about the application.

#    II. Software Requirements
- Windows 10 / macOS / Ubuntu 16
- Angular CLI v10 and later version.
- NodeJS v14 or later version.
- MongoDB v4.2 or later version.

#    III. Hardware Requirements
- 4 GB RAM or more
- 10GB Available Disk Space

#    IV. Project Technical Specifications
The “To Do Application” is a web application to list tasks that you need to do or complete. Displayed below are the project objectives; and scope and limitations.
Objectives:
The project aims:
- To provide a list of tasks needed to complete.
- To allow the user to complete a task
- To allow the user to update a task.
- To allow the user to delete a task.
	Scope:
	The scope of the project includes:
- The application will list the added task chronologically.
- The user can edit a task at a time.
- The user can complete a task by clicking the task name.
	
# Limitations:
	The limitations of the project includes:
- The application will not remind the user of the uncompleted tasks.
- The deleted task cannot be recovered.

#    V. Set-up Instructions
This section includes the instructions on how to install the project. Installation may vary between Operating Systems and make sure you already installed NodeJS and Angular CLI on your local machine before proceeding.

- Clone the project from the repository and change the current directory to the project folder. The branch main is the most updated branch.
	       	git clone https://github.com/fdc1010/to-do.git

- To install the dependencies of our NodeJS back-end application, change directory to the node_app folder and input the command npm install. Run the node application by using the command nodemon.
		
cd node_app
		npm install
		nodemon

- Open a new terminal and change the current working directory to the Angular application folder using cd angular_todo. Install the dependencies using npm install. Serve the Angular application using the command ng serve  -o.

- To conduct a unit test of the node application, change the current directory to the node_app folder and use the command npm test.


# VI. References

- [link1](https://www.appvizer.com/magazine/operations/project-management/project-specification)
- [link2](https://stackoverflow.blog/2020/04/06/a-practical-guide-to-writing-technical-specs/)
- [link3](https://www.greycampus.com/opencampus/project-management-professional/project-documents)