const express = require('express');
const router = express.Router();
const parkingOrderService = require('./parking_order.service');

// routes
router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function getAll(req, res, next) {
    parkingOrderService.getAll()
        .then(parking_orders => res.json(parking_orders))
        .catch(next);
}

function getById(req, res, next) {
    parkingOrderService.getById(req.params.id)
        .then(parking_order => parking_order ? res.json(parking_order) : res.sendStatus(404))
        .catch(next);
}

function create(req, res, next) {
    parkingOrderService.create(req.body)
        .then(parking_order => res.json(parking_order))
        .catch(next);
}

function update(req, res, next) {
    parkingOrderService.update(req.params.id, req.body)
        .then(parking_order => res.json(parking_order))
        .catch(next);
}

function _delete(req, res, next) {
    parkingOrderService.delete(req.params.id)
        .then(() => res.json({ message: 'Parking order deleted successfully!' }))
        .catch(next);
}