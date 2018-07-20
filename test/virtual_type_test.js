const assert = require('assert');
const User = require('../src/user');

describe('Virtual types', ()=>{
    it('postCount returns numer of posts',(done)=>{
        const ryan = new User({
            name:'Ryan',
            posts:[{title:'New Post'}]
        });
       // ryan.postCount //0 null undefined

    

    ryan.save()
    .then(()=>User.findOne({name:'Ryan'}))
    .then((user)=>{
        assert(ryan.postCount ===1);
        done();
          });
      });
});