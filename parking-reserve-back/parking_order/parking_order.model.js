const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderStatus = require('../helpers/order_status')

const schema = new Schema({
    buyer: { 
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Account'
    },
    parкing_slot: { 
        type : mongoose.Schema.Types.ObjectId,
        ref: 'ParkingArea'
    },
    status: {
        type: String,
        enum: OrderStatus,
        default: OrderStatus.NotPaid,
    },
    time_from: Date,
    time_to: Date,
    price_per_hour: Number,
    income: Number,
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        // remove these props when object is serialized
        delete ret._id;
        delete ret.id;
    }
});

module.exports = mongoose.model('ParkingOrder', schema);