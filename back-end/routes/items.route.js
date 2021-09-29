/**
 * Ruta: /api/usuarios
 */

const { Router } = require('express');

const { getShowCase, getItem } = require('../controllers/items.controller');

const router = Router();

router.get('/', getShowCase);
router.get('/:id', getItem);

module.exports = router;
