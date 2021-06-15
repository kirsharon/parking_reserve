const db = require('helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    const parking_slots = await db.ParkingSlot.find();
    return parking_slots.map(x => basicDetails(x));
}

async function getById(id) {
    const parking_slot = await getParkingSlot(id);
    return basicDetails(parking_slot);
}

async function create(params) {
    const parking_slot = new db.ParkingSlot(params);

    // save account
    await parking_slot.save();

    return basicDetails(parking_slot);
}

async function update(id, params) {
    const parking_slot = await getParkingSlot(id);
    // copy params to slot and save
    Object.assign(parking_slot, params);
    await parking_slot.save();

    return basicDetails(parking_slot);
}

async function _delete(id) {
    const parking_slot = await getParkingSlot(id);
    await parking_slot.remove();
}

// helper functions

async function getParkingSlot(id) {
    if (!db.isValidId(id)) throw 'Parking slot not found';
    const parking_slot = await db.ParkingSlot.findById(id);
    if (!parking_slot) throw 'Parking slot not found';
    return parking_slot;
}

function basicDetails(parking_slot) {
    const { id, status, location, time_before, time_after, price_per_hour, photo_path, parкing_area, owner } = parking_slot;
    return { id, status, location, time_before, time_after, price_per_hour, photo_path, parкing_area, owner };
}