const assert = require('assert');
const User = require('../src/user');

describe('Validating records',()=>{
//Specifically add records and validate the data


    it('Requires a username', ()=>{

        const user = new User({name:undefined});
        //use ValidateSync to pull validation results for user object
        const validationResult = user.validateSync();
        // call validation.errors.name.message  to display error code
        const {message} = validationResult.errors.name;

        assert(message === 'Name is required.');


    });

    it('requires a user name longer than 2 characters',()=>{
        const user = new User({name:'Bo'});
        const validationResult = user.validateSync();
        const{message} = validationResult.errors.name;
        assert(message === 'Name must be greater than 2 characters.');
    });
    
    it('Disallows invalid records from being saved',(done)=>{
        const user = new User({name:'Bo'});
        user.save()

            .catch((validationResult)=>{
                const {message} = validationResult.errors.name;
                assert(message ==='Name must be greater than 2 characters.');
                done();
            });
    })
});