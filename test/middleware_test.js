const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const BlogPost = require('../src/blogPost');

describe('Middleware',()=>{
    let ryan,blogPost;
   
    beforeEach((done)=>{
        ryan = new User({name:'Ryan'});
        blogPost = new BlogPost({title:'JS is cool',content:'It is amazing!'});
     

        ryan.blogPosts.push(blogPost);     

       
      //forces all saves to complete before calling done 

        Promise.all([
            ryan.save(),
            blogPost.save()
          
        ])

        .then(()=>done());

       
    });

    it( 'Users clean up dangling blogposts on remove',(done)=>{
        
        ryan.remove()
        .then(()=>BlogPost.count())
        .then((count)=>{
            assert(count ===0);
            done();
        })

        
    });

});