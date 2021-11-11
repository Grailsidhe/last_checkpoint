const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogpostSchema = new Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    postbody: { type: String, required: true },
    keywords: { type: String, required: true }
});

const Blogpost = mongoose.model('Blogpost', blogpostSchema);

module.exports = Blogpost;