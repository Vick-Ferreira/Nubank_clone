const express = require('express');
const multer = require('multer');
const bloco = require('../controller/blocoCardController');

const router = express.Router();

//upload img 
const imgStorage = multer.memoryStorage();
const imgUpload = multer({ storage: imgStorage });

router.post('/', imgUpload.single('icone'), bloco.createbloco);

//retorno de todos os dados
router.get('/', bloco.listarbloco);

//retorno de dados especificos img
router.get('/:filename', bloco.getbloco);




module.exports = router;