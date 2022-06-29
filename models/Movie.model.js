const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schemaMovie = new Schema({
    title:{
        type: String,
        required: true
    },
    genre:{
        type: String
    },
    plot:{
        type: String
        
    },
    cast:{
        type: [String]
    }
})



const Movie = mongoose.model('Movie', schemaMovie)
module.exports = Movie