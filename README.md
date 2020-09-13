# To-Do Manager
#### Author: Cora Wang
Last Update: Sep, 2020

A app to create and manage user identities through authentication and associated to-do lists on MongoDB using Node.js and Express

The app is mainly written in Node.js
Associated modules involve:
* `express` for webserver
* `validator` for database input validation
* `MongoDB` for database, managed via `mongoose`
* `jsonwebtoken` to create user login tokens and manage user identities
* `bcryptjs` for password encryption
* `sendGrid` for email communication
* `multer` for file upload middleware
* `sharp` for image compression

All packages are available for downloads via npm

### To run this project
First, clone the project via ```git clone git@github.com:wcora/taskApp.git```

And then run ```npm install``` to install dependencies


To make this project fully functional, you will need to provide a `./config` folder with a `dev.env` file to set up several environment variables.

*`PORT` - the localhost port with the default being 3000

*`SENDGRID_API_KEY` - an API key created via sendGrid.com

*`JWT_TOKEN` - any string you would like to use to encrypt the access token

*`MONGODB_URL` - the database address, typically being mongodb://127.0.0.1:27017/YOUR_APP_NAME

Lastly, run ```npm run dev``` to start the project
