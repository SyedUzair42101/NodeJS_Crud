"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userProfile = new Schema({
    Name: {
        type: String
    },
    dateOfBirth: {
        type: Date
    },
    email: {
        type: String
    },
    picture: {
        type: String
    }
});
module.exports = mongoose.model("UserProfile", userProfile)