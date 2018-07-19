const assert = require('assert');
const User = require('../src/user');

describe('creating records',()=>{
    it('saves a user',()=>{
        //tests that a user is created
        //User here sets up the User collection
        //the name ryan creates a new document, nothing is saved in this statment
        const ryan = new User({name:'Ryan'});

        //this saves Ryan to the collection
        ryan.save();
       
    });
});