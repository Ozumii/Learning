const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//this sets up what we should expect which gives us a model, these are like the properties that a User could have 
const UserSchema = new Schema({

    name:{
          type:String,
          validate:{
                validator:(name)=> name.length>2,
                message: 'Name must be greater than 2 characters.'
          },
    
          required:[true,'Name is required.']
        },
    postCount:Number

});


//we tell mongoose to look for  a collection => user, if it exists it is selected, if not mongoose auto creates the collection
//the UserShema tells us what the collection should look like for a user. 

//Below represents the entire collection of data not a particular user. 
const User = mongoose.model('user', UserSchema);

//export this so that it can be used in other functions of the application.
module.exports = User;