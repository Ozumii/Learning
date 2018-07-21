const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./postSchema');


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
        //todo: add a virtual property for postCount
    
    posts:[PostSchema],
    likes:Number,
    blogPosts:[{
        type:Schema.Types.ObjectId,
        ref:'blogPost'
    }]

});

//adding a virtual property
UserSchema.virtual('postCount').get(function(){
        return this.posts.length;
});

UserSchema.pre('remove',function(next){
    const BlogPost = mongoose.model('blogPost');
    //$in is a mongo function to iterate through a record
    //console.log('contains: ' + this.blogPosts);

    BlogPost.remove({_id:{ $in:this.blogPosts}})
    .then(()=>next());

});


//we tell mongoose to look for  a collection => user, if it exists it is selected, if not mongoose auto creates the collection
//the UserShema tells us what the collection should look like for a user. 

//Below represents the entire collection of data not a particular user. 
const User = mongoose.model('user', UserSchema);

//export this so that it can be used in other functions of the application.
module.exports = User;