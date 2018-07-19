const assert = require('assert');
const User = require('../src/user');

describe('creating records',()=>{
    //call done here to test the assertion after the user has been saved
    it('saves a user',(done)=>{
        //tests that a user is created
        //User here sets up the User collection
        //the name ryan creates a new document, nothing is saved in this statment
        const ryan = new User({name:'Ryan'});

        //this saves Ryan to the collection
        ryan.save()
        //use a promise to confirm that this was saved
        .then(()=>{
            //confirm that user is actually saved to the collection
            assert(!ryan.isNew);
            done();
            
        });
       
    });
});