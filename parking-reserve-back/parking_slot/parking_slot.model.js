const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SlotStatus = require('../helpers/slot_status')

const schema = new Schema({
    id: { 
        type: mongoose.SchemaTypes.ObjectId,
        unique: true
    },
    status: {
        type: String,
        enum: SlotStatus,
        default: SlotStatus.Avaible,
    },
    location: {
        type: {
            type: String,
            enum: ['Point', 'Polygon']
        },
        coordinates: [Number],
    },
    time_before: Date,
    time_after: Date,
    price_per_hour: Number,
    photo_path: [{
        type: String
    }],
    parкing_area: { 
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ParkingArea'
    },
    owner: {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'Account' 
    }
});

schema.index({ "location": '2dsphere' });

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
        delete ret.id;
    }
});

module.exports = mongoose.model('ParkingSlot', schema);