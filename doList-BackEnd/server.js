/*
  Arquivo que se conecta com banco de dados e servidor, 
  o "import" utilizamos aqui graças a dependência sucrase, mas para isso é
  necessário a criação do arquivo "nodemon.json"
*/ 

import express from 'express';

import router from './Routes/routes';

import './src/Database/database';

const app = express();
const port = process.env.PORT || 3000; 

app.use(express.json());

app.use('/', router); 

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
});