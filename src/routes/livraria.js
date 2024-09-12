const express = require('express');
const router = express.Router();
const livraria_controller = require('../controllers/livraria.js');

router.post('/', livraria_controller.createLivro);
router.get('/', livraria_controller.getLivro);
router.get('/:id', livraria_controller.getLivroById);
router.put('/:id', livraria_controller.updateLivro);
router.delete('/:id', livraria_controller.deleteLivro);

module.exports = router;