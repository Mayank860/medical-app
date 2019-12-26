const mongoose = require('mongoose');

const userSchema = {
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
    loginRole:'string'
}
const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  };
const schema = new mongoose.Schema(userSchema,schemaOptions);
module.exports = mongoose.model('Users', schema);