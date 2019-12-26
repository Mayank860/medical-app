const mongoose = require('mongoose');

const doctorSchema = {
    firstName: 'string',
    lastName: 'string',
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
    hospitalId:''
}
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const schema = new mongoose.Schema(doctorSchema,schemaOptions);
module.exports = mongoose.model('Doctor', schema);