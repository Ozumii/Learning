//this is not a model
//this is just housing the Schema for posts
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title:String,
    
});

module.exports = PostSchema;