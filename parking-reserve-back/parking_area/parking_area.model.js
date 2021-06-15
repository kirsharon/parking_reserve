const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const polygonSchema = new Schema({
    type: {
      type: String,
      enum: ['Polygon'],
      required: true
    },
    coordinates: {
      type: [[[Number]]], // Array of arrays of arrays of numbers
      required: true
    }
});
  
//   {
//     "type": "Polygon",
//     "coordinates": [[
//       [-109, 41],
//       [-102, 41],
//       [-102, 37],
//       [-109, 37],
//       [-109, 41]
//     ]]
//   }

const ParkinAreaSchema = new Schema({
    id: String,
    location: polygonSchema
});

ParkinAreaSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
        delete ret.id;
    }
});

module.exports = mongoose.model('ParkingArea', ParkinAreaSchema);