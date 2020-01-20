//Métodos http: get, post, put, delete
//Tipos de parâmtros: request.query (Filtros, ordenção, paginação, ...)
//Query params:
//Route params: 
//Body: request.body   (Dados para criação ou alteração de um registro)const express = require('express');

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');//impotando as rotas; //passando o caminho relativo ao arquivo
const app = express();

mongoose.connect('mongodb+srv://CCastro:plss34ef@cluster0-nba02.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true

});

app.use(express.json());
app.use(routes);
app.listen(3333);




