const express = require('express');
const router = express.Router();
const cliente_controller = require('../controllers/cliente.js');
const via_cep = require('../middleware/cep_endereco.js');

router.post('/', via_cep, cliente_controller.createCliente);
router.get('/', cliente_controller.getClientes);
router.get('/:id', cliente_controller.getClienteById);
router.put('/:id', cliente_controller.updateCliente);
router.delete('/:id', cliente_controller.deleteCliente);

module.exports = router;