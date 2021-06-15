const db = require('helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    const parking_orders = await db.ParkingOrder.find();
    return parking_orders.map(x => basicDetails(x));
}

async function getById(id) {
    const parking_order = await getParkingOrder(id);
    return basicDetails(parking_order);
}

async function create(params) {
    const parking_order = new db.ParkingOrder(params);

    // save account
    await parking_order.save();

    return basicDetails(parking_order);
}

async function update(id, params) {
    const parking_order = await getParkingOrder(id);
    // copy params to slot and save
    Object.assign(parking_order, params);
    await parking_order.save();

    return basicDetails(parking_order);
}

async function _delete(id) {
    const parking_order = await getParkingOrder(id);
    await parking_order.remove();
}

// helper functions

async function getParkingOrder(id) {
    if (!db.isValidId(id)) throw 'Order not found';
    const parking_order = await db.ParkingSlot.findById(id);
    if (!parking_order) throw 'Order not found';
    return parking_order;
}

function basicDetails(parking_slot) {
    const { id, buyer, parкing_slot, status, time_from, time_to, price_per_hour, income } = parking_slot;
    return { id, buyer, parкing_slot, status, time_from, time_to, price_per_hour, income };
}