const mongoose = require('mongoose');//importando o mongoose

const DevSchema = new mongoose.Schema({
    namea: String,
    gitHub_username: String,
    bio: String,
    avatar_url: String,
    techs: [String],
});

module.exports = mongoose.model('Dev', Schema); // exportando esse model