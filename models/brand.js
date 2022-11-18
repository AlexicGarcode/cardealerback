
const { Schema, model } = require('mongoose');

const BrandSchema = Schema({
    name: {
        type: String,
        required : [ 'name required']
    },
    imgUrl:{
        type: String,
        default: ''
    },
    
})

Brandchema.methods.toJSON = function (){
    const { __v, ...data } = this.toObject();
 
    return data;
}


module.exports = model('Brand', BrandSchema);