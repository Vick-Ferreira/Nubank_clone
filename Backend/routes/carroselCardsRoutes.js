const express = require('express');
const multer = require('multer');
const carroselCards = require('../controller/carroselCardsController');

const router = express.Router();


// Configuração para upload de imagens
const imgStorage = multer.memoryStorage();
const imgUpload = multer({ storage: imgStorage });

// Adiciona elementos de texto e uma imagem
router.post('/carrosel', imgUpload.single('icone'), carroselCards.createCarrosel);


//retorno de todos os dados
router.get('/carrosel', carroselCards.listarCarrosel);

//retorno de dados especificos img
router.get('/carrosel/:filename', carroselCards.getCarrosel);

module.exports = router;
