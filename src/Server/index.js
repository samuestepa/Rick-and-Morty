import http from 'http';
import data from './utils/data';

http
.createServer((request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    if(request.url ===  "/rickandmorty/character"){

       const id =  request.users.split('\n').at(-1).trim();
       
        const character = data.map((character => {
            return character === id 
        }))
        return response.end(JSON.stringify(character))
    } else {
        return response.end('Error 404')
    }
})
.listen(3001)