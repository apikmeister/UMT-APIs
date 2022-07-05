const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8008;
// const request = require("request-promise");
// const mongoose= require('mongoose');
// const bodyparser=require('body-parser');
// const cookieParser=require('cookie-parser');
// const { response } = require('express');

request("https://epembelajaran.umt.edu.my/oceania/auth/saml/index.php", (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $= cheerio.load(html);
    }
})

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

app.get('/', function(req, res) {
    let result = req.query.result;

    let url = 'https://pelajar.mynemo.umt.edu.my/index.php?module=hepa&app=mystar&page=trans';


});

// request(url, function(error, response, html) {
//     if(!error) {
//         let $ = cheerio.load(html);
//     }
// });

// let mystar = $(span.style80 > strong);

// module.exports = api;

// //run function after get
// api.get('/tshirt', (req, res)/*request(incoming) and response(outgoing)*/ => {
//     res.status(200).send({/*data payload*/
//         tshirt : 'wow',
//         size : 'medium'
//     })
// });

// //dynamic url param
// api.post('/tshirt/:id'/*capture dynamic value in URL*/, (req, res) => {
//     const { id } = req.params;
//     const { logo } = req.body;

//     if (!logo) {
//         res.status(418).send({ message: 'We need a logo!' })
//     }

//     res.send({
//         tshirt: `Shirt with your ${logo} and ID of ${id}`,
//     });
// });