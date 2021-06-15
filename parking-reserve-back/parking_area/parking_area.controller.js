const express = require('express');
const router = express.Router();
const parkingAreaService = require('./parking_area.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    parkingAreaService.getAll()
        .then(parking_areas => res.json(parking_areas))
        .catch(next);
}

function getById(req, res, next) {
    parkingAreaService.getById(req.params.id)
        .then(parking_area => parking_area ? res.json(parking_area) : res.sendStatus(404))
        .catch(next);
}

function create(req, res, next) {
    parkingAreaService.create(req.body)
        .then(parking_area => res.json(parking_area))
        .catch(next);
}

function update(req, res, next) {
    parkingAreaService.update(req.params.id, req.body)
        .then(parking_area => res.json(parking_area))
        .catch(next);
}

function _delete(req, res, next) {
    parkingAreaService.delete(req.params.id)
        .then(() => res.json({ message: 'Parking area deleted successfully!' }))
        .catch(next);
}