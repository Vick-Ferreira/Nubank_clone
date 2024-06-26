const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');

const port = process.env.PORT || 8080;

// Verificar e exibir a URI do MongoDB
if (!process.env.MONGODB_URI) {
    console.error('Erro: MONGODB_URI não está definida no arquivo .env');
    process.exit(1);
}

console.log('MONGODB_URI:', process.env.MONGODB_URI);

app.use(express.json());
app.use(cors());


// Log de requisição para verificar chamadas
app.use((req, res, next) => {
    console.log(`Recebida requisição: ${req.method} ${req.url}`);
    next();
});

// Importar e usar as rotas
const carroselCardsRouter = require('./routes/carroselCardsRoutes');
app.use( '/carrosel', carroselCardsRouter);

const elementosCardsRouter = require('./routes/elementosCardsRoutes');
app.use( '/elementos', elementosCardsRouter);

const cardCardsRouter = require('./routes/cardCardsRoutes');
app.use('/cardCards', cardCardsRouter);

const duploCardsRouter = require('./routes/duploCardRoutes');
app.use('/duploCards', duploCardsRouter);

const blocoCardRouter = require('./routes/blocoCardRoutes');
app.use('/bloco', blocoCardRouter);

const backgroudCardRouter = require('./routes/backgroundCardRoutes');
app.use('/backgroud', backgroudCardRouter);

// Servir arquivos estáticos
const frontendPath = path.join(__dirname, '../Frontend');
app.use(express.static(frontendPath));

// Conectar com MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado ao MongoDB');
    })
    .catch((error) => {
        console.error('Erro ao conectar ao MongoDB', error);
    });

// Inicialização do servidor
app.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`);
});
