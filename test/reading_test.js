const assert = require('assert');

const User = require('../src/user');

describe('Reading users out of User database',()=>{
    //creates user in describe block to be referenced in other blocks
    let ryan;

    beforeEach((done)=>{
        ryan = new User({name:'Ryan'});
        ryan.save()
            .then(()=>{
                done();
            });
    });

    
    //must be able to find users by name
    //done is called to allow for the db to search
    it('finds all users by name',(done)=>{
        //search db for a name of Ryan
        User.find({name:'Ryan'})
        //after the search has concluded it then posts to the console to verify that the single user was found
        .then((users)=>{
           // console.log(users[0]._id);
           // console.log(ryan._id);
            //when calling the id use string to make the Objectid string readable
            assert(users[0]._id.toString() === ryan._id.toString());
            //done called to allow mocha to move onto the next test if applicable
            done();
        });

   
    });
    it('finds an id with a unique id',(done)=>{
        //searches mongo for a unique id
        User.findOne({_id:ryan._id})

        .then((user)=>{
            assert(user.name === 'Ryan');
            done();
            });
        });
});