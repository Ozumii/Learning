const assert = require('assert');
const User = require('../src/user');

describe('Deleting a user',()=>{
   let ryan;

   beforeEach((done)=>{
       ryan =new User({name:'Ryan'});
       ryan.save()
       .then(()=>{
           done();
       });
       
   });

   it('model instance remove',()=>{

   });
   it('class method remove',()=>{
        //User
   });
   it('class method findAndRemove',()=>{
         //User
   });
   it('class method findByIdAndRemove ',()=>{
         //User
   });
     
});