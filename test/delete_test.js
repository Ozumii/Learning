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

   it('model instance remove',(done)=>{
        //this works off promises
        //the below code finds the user named Ryan and removes it from the collection
                ryan.remove()

                    //wait for remove() to finish running execute a find to see if the item has been destroyed.
                    .then(()=>User.findOne({name:'Ryan'}))
                        .then((user)=>{
                            //check if the user object is in fact gone
                            assert(user === null);
                            done();
                });
        });
   it('class method remove',(done)=>{
        //User 
        //this allows us to remove multiple records
        User.remove({name:'Ryan'})
           //wait for remove() to finish running execute a find to see if the item has been destroyed.
           .then(()=>User.findOne({name:'Ryan'}))
                .then((user)=>{
                    //check if the user object is in fact gone
                    assert(user === null);
                    done();
                    });
        });


   it('class method findAndRemove',(done)=>{
         //User
         User.findOneAndRemove({ name:'Ryan'})
         
            .then(()=>User.findOne({name:'Ryan'}))
                    .then((user)=>{
                    //check if the user object is in fact gone
                    assert(user === null);
                    done();
                    });
 });


   it('class method findByIdAndRemove ',(done)=>{
         //User
         User.findByIdAndRemove(ryan._id)
            .then(()=>User.findOne({name:'Ryan'}))
                    .then((user)=>{
                    //check if the user object is in fact gone
                    assert(user === null);
                    done();
                    });
   });
     
});