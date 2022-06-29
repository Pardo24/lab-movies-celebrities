const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const schemaCelebrity = new Schema({
    name:{
        type: String,
        required: true
    },
    occupation:{
        type: String,
        default: undefined
    },
    catchPhrase:{
        type: String,
        required: true
    }
})



const Celebrity = mongoose.model('Celebritie', schemaCelebrity)
module.exports = Celebrity