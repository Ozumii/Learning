const mongoose = require('mongoose');

//local port number must be indicated or an error will be thrown
const url ='mongodb://localhost:27017/users_test';

//must be before tests
//connecting to local database, this can be pointed internally or externally
mongoose.connect(url,{useNewUrlParser:true});



//start the connection
mongoose.connection
//if the connection is valid this looks like it uses Promises
//Listen for mongo to emit open only one time
.once('open', ()=>{ console.log('Connected to db!')})
//on a failure, log the error
//watch for mongo to emit an error and listen
.on('error', (error)=>{
    console.warn('Warning',error);
});