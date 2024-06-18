const express = require('express');
const multer = require('multer');
const elementosCards = require('../controller/elementosCardsController');

const router = express.Router();

//upload img 
const imgStorage = multer.memoryStorage();
const imgUpload = multer({ storage: imgStorage });

router.post('/', imgUpload.single('imagem'), elementosCards.createElementos);

//retorno de todos os dados
router.get('/', elementosCards.listarElementos);

//retorno de dados especificos img
router.get('/:filename', elementosCards.getElementos);




module.exports = router;