import express from 'express';

import router from './Routes/routes' // importar as rotas de outro arquivo.


// esqueçemos esse import, por essa razão o banco não funfava.
import './src/Database/database';

const app = express();
const port = process.env.PORT || 3030; // caso esteja configurado variaveis de ambiente elas serão usadas se não houver porta 3000.

app.use(express.json());

app.use('/', router); // foi usado um arquivo exclusivo para as rotas que foram importadas lá em cima.

app.listen(port, () => {
  console.log(`Server running in http://localhost:${port}`)
});

// usar o nome server fica mais claro.

// para poder usar import usamos a dependencia sucrose
// para integrar sucrose e nodemon é necessario criar o arquivo nodemon.json aquele conteudo. 
// para saber mais consulte: https://lucassr.medium.com/usando-sucrase-no-nodejs-e0375359ce44
