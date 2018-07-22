const mongoose = require('mongoose');

//local port number must be indicated or an error will be thrown
const url ='mongodb://localhost:27017/users_test';

//if promise is deprecated use es6 promises, mongoose newest version has this issue automatically

//mongoose.Promise = global.Promise

before((done)=>{
//must be before tests
//connecting to local database, this can be pointed internally or externally
mongoose.connect(url,{useNewUrlParser:true});

//start the connection
mongoose.connection
//if the connection is valid this looks like it uses Promises
//Listen for mongo to emit open only one time
.once('open', ()=>{ done();})
//on a failure, log the error
//watch for mongo to emit an error and listen
.on('error', (error)=>{
    console.warn('Warning',error);
});

    
});

//creating a hook to empty database when test is ran
//without this hook the db will create a new entry that persists in the database. 
//accepts run as a call back to let Mocha know it is ready to run the test
beforeEach((done)=>{
    //drop accepts a callback that will execute after the drop
    const{users,comments,blogposts} = mongoose.connection.collections;

    users.drop(()=>{

        //added in comment/blogpost to drop collections, interfered wiht the middleware test for dropping collections
        comments.drop(()=>{
           blogposts.drop(()=>{
               done();
            });
        });
       
    });
});