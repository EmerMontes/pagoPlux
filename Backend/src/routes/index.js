const { Router } = require('express');
const {getUsers} = require('../controllers/userInDb')
const {getMovimientos} = require('../controllers/getMovimientos')

const router = Router();

// Configurar los routers
router.post('/users', getUsers);
router.get('/movimientos', getMovimientos);


module.exports = router;