const assert = require('assert');
const User = require('../src/user');

describe('Updating records',()=>{

    let ryan;

    beforeEach((done)=>{
        ryan = new User({name:'Ryan', likes:0});
        ryan.save()
            .then(()=>{
                done();
            });
    });

 //created an assert to handle the promises so the code doesnt have to be repeated.    
function assertName(operation,done){
    operation
    .then(()=>{
        User.find({})

        .then((users)=>{
            assert(users.length ===1);
            assert(users[0].name ==="Chris");
            done();
        });
    });

};


    it('Instance sent and save',(done)=>{
        //this only happens in memory and does not persist
        ryan.set('name',"Chris");
        //this actually saves the record to the database
        assertName(ryan.save(),done);
                
        });
    it('A model instance can update',(done)=>{
            //for an update we plug in or pass the properties we want updated
            
            assertName(ryan.update({name:'Chris'}),done);
    });

    it('A model class can update',(done)=>{
        //find all instances where the record has a name of Ryan and replace it with Chris
        //In update you have to specify what you want to update the record with
        assertName(
            User.update({name:'Ryan'},{name:'Chris'}),
            done
        );
    });

    it('A model class can update one record', (done)=>{
         assertName(
            User.findOneAndUpdate({name:'Ryan'},{name:'Chris'}),
            done
         );
    });

    it('A model class can find and update a record by ID and update ',(done)=>{

        assertName(
            User.findByIdAndUpdate(ryan._id,{name:'Chris'}),
            done
        );
    });

    it('A user can have their postcount incremented by 1',(done)=>{
        //to do this use Mongo's update operators
        User.update(
            {name:'Ryan'},{$inc:{likes:10} })
            .then(()=>{
                User.findOne({name:'Ryan'})
                .then((user)=>{
                    assert(user.likes === 10);
                    done();
                });
            });
    });

});

