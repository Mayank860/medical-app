const mongoose = require('mongoose');

const hospitalSchema = {
    name: 'string',
    contactInfo:{
        tel: ['number'],
        email: ['string'],
        address: {
            country:'string',
            city: 'string',
            street: 'string',
            houseNumber: 'string'
        }
    },
    department:{ 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    }
}
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const schema = new mongoose.Schema(hospitalSchema,schemaOptions);
module.exports = mongoose.model('Hospital', schema);