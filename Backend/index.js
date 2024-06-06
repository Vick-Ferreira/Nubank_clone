//config servidor 
const express = require('express'); //recuperando do pacote
const app = express(); //atribuindo na const app o que recuperou do pacote
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');


const port = process.env.PORT || 3000

app.use(express.json());
app.use(cors());

//rotas para router
app.get('/carroselCards', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.carroselCards);
});
app.get('/duplacard', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.duplacard);
});
app.get('/backgroud', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.backgroud);
});
app.get('/unico', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.unico);
});
app.get('/elementosCards', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.elementosCards);
});
app.get('/cardCards', (req, res) => {
   const path = require('path'); // Importar o módulo path
   const data = require(path.join(__dirname, 'db.json')); // Caminho relativo ao diretório atual
   res.json(data.cardCards);
});



//servir arquivos estáticos
const frontendPath = path.join(__dirname, '../Frontend') //pasta em que está os arquivos estáticos
app.use(express.static(frontendPath));



//conectar com mongodb
mongoose.connect(process.env.MONGODB_URI)
   .then(() => {
      console.log('Conectado ao mongoDB');
   })
   .catch((error) => {
      console.error('Erro ao conectar ao mongoDB', error);
   });


// inicialização do servidor 
app.listen(port, () => {
   console.log(`Servidor está rodando na porta : ${port}`)
});