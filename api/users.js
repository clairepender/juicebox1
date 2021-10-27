const express = require('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log("A requeset is being made to /users");

    res.send({ message: 'hello from /users!'});
});

module.exports = usersRouter; 

/*The express object is useful for more than creating a server. Here we use the Router function to create a new router, 
and then export it from the script.

Then, inside the new api/index.js we can require and attach it to an apiRouter*/