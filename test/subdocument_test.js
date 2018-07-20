const assert = require('assert');
const User = require('../src/user');

describe('Subdocuments',()=>{

        it('Creates a subdocument',(done)=>{
            const ryan = new User({
                name:'Ryan',
                posts:[{title:'Working in Mongo'}]
            });
            ryan.save()
                .then(()=>User.findOne({name:'Ryan'}))
                    .then((user)=>{

                        assert(user.posts[0].title ==='Working in Mongo');
                        //console.log(user);
                        done();

                
                });

        });

        it('Can add subdocuments to an existing record',(done)=>{
            //create user
            const ryan = new User({
                name:'Ryan',
                //initializing this as an empty array for the test
                posts:[]
            });

            //save user
            ryan.save()

                

            //fetch user
                .then(()=>
                //if {User.findOne({name:'Ryan'})} make sure to use return 
                    User.findOne({name:'Ryan'})
                )

            //add to the subdocument
                    .then((user)=>{
                        user.posts.push({title:'Newer Post'});
                        //save the change to persist to database
                        return user.save();
                    })
                        //fetch user
                        .then(()=>User.findOne({name:'Ryan'}))
                            
                              //make assertion
                            .then((user)=>{
                                    assert(user.posts[0].title ==="Newer Post");
                                    done();
                                });    
            
        });

        it('Can remove an existing subdocument',(done)=>{

              //create user
              const ryan = new User({
                name:'Ryan',
                //initializing this as an empty array for the test
                posts:[{title:'New Title'}]
            });

            ryan.save()

            .then(()=>User.findOne({name:'Ryan'}))

                .then((user)=>{
                    //const post = user.posts[0];
                    //the remove() is added by mongoose
                    //post.remove();
                    user.posts[0].remove();
                    return user.save();
                })
                .then(()=>User.findOne({name:'Ryan'}))
                .then((user)=>{
                    assert(user.posts.length=== 0,'Post has been deleted');
                    done();
                });

        });

});