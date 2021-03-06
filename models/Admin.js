const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const adminSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide email address"],
        unique: true,
        match: [
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          "Please provide a valid email",
        ],
    },
    password: { type: String, required: [true, 'Please add a password'], minlength:6, select:false }
});

//verify is the password is modified
adminSchema.pre('save', async function(next) {
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next(); 
})

adminSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)
}

adminSchema.methods.getSignedToken = function () {
    return jwt.sign({id: this._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE} )
}

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;