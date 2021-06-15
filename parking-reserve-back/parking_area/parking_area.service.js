const db = require('helpers/db');

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    const parking_areas = await db.ParkingArea.find();
    return parking_areas.map(x => basicDetails(x));
}

async function getById(id) {
    const parking_area = await getParkingArea(id);
    return basicDetails(parking_area);
}

async function create(params) {

    const parking_area = new db.ParkingArea(params);

    // save account
    await parking_area.save();

    return basicDetails(parking_area);
}

async function update(id, params) {
    const parking_area = await getParkingArea(id);
    // copy params to area and save
    Object.assign(parking_area, params);
    await parking_area.save();

    return basicDetails(parking_area);
}

async function _delete(id) {
    const parking_area = await getParkingArea(id);
    await parking_area.remove();
}

// helper functions

async function getParkingArea(id) {
    if (!db.isValidId(id)) throw 'Parking area not found';
    const parking_area = await db.ParkingArea.findById(id);
    if (!parking_area) throw 'Parking area not found';
    return parking_area;
}

function basicDetails(parking_area) {
    const { id, location } = parking_area;
    return { id, location };
}