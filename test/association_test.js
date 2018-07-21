const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');


describe('Associations',()=>{

    let ryan,blogPost,comment;

    beforeEach((done)=>{
        ryan = new User({name:'Ryan'});
        blogPost = new BlogPost({title:'JS is cool',content:'It is amazing!'});
        comment = new Comment({content:'Congrats on a great post!'});

        ryan.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = ryan;

       
      //forces all saves to complete before calling done 

        Promise.all([
            ryan.save(),
            blogPost.save(),
            comment.save()
        ])

        .then(()=>done());

       
    });

    it('Saves a relation between a user and a blogpost',(done)=>{

        // Collection. find    . then()
        //
        //Load the collection we are using, find a name, then execute the query
        //
        User.findOne({name:'Ryan'}).populate('blogPosts')
        .then((user)=>{
            assert(user.blogPosts[0].title ==='JS is cool');
            done();
        });
       
    });

    it('Saves a full relation tree for a user',(done)=>{
        User.findOne({name:'Ryan'})
        .populate({
            path:'blogPosts',
            populate:{
                path:'comments',
                model:'comment',
                populate:{
                    path:'user',
                    model:'user'
                }
            }
        }).then((user)=>{
            assert(user.name ==='Ryan');
            assert(user.blogPosts[0].title ==='JS is cool');
            assert(user.blogPosts[0].comments[0].content ==='Congrats on a great post!');
            assert(user.blogPosts[0].comments[0].user.name ==='Ryan');

            done();
        });
    });

});