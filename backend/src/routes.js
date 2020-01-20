const { Router } = require('express'); // importando o módulo de roteamento de dentro do express
const axios = require('axios');


const routes = Router();

routes.post('/devs', async (request, response) => { // a flag async é usada para dizer que essa função pode...
    const { gitHub_username, techs} = (request.body);             //demorar para responder


    const apiResponse = await axios.get(`https://api.github.com/users/${gitHub_username}`);
    // o await está fazendo com que seja aguardado a chamada no github concluir, para devolver uma resposta e continiar

    const {name = login, avatar_url, bio} = apiResponse.data;
    console.log(name, avatar_url, bio);
      
    return response.json({ message: 'Hello CCastro_dev' });
});

module.exports = routes;//exportando o objeto de routes

