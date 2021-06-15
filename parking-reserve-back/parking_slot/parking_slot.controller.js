const express = require('express');
const router = express.Router();
const parkingSlotService = require('./parking_slot.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    parkingSlotService.getAll()
        .then(parking_slots => res.json(parking_slots))
        .catch(next);
}

function getById(req, res, next) {
    parkingSlotService.getById(req.params.id)
        .then(parking_slot => parking_slot ? res.json(parking_slot) : res.sendStatus(404))
        .catch(next);
}

function create(req, res, next) {
    parkingSlotService.create(req.body)
        .then(parking_slot => res.json(parking_slot))
        .catch(next);
}

function update(req, res, next) {
    parkingSlotService.update(req.params.id, req.body)
        .then(parking_slot => res.json(parking_slot))
        .catch(next);
}

function _delete(req, res, next) {
    parkingSlotService.delete(req.params.id)
        .then(() => res.json({ message: 'Parking slot deleted successfully!' }))
        .catch(next);
}