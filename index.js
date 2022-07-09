const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const axios = require('axios');
const bodyparser = require('body-parser');
const bodyParser = require('body-parser');
const api = require(`./api/api`);

const app = express();

const PORT = process.env.PORT || 8008;
// const request = require("request-promise");
// const mongoose= require('mongoose');
// const bodyparser=require('body-parser');
// const cookieParser=require('cookie-parser');
// const { response } = require('express');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// request("https://epembelajaran.umt.edu.my/oceania/auth/saml/index.php", (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $= cheerio.load(html);
//     }
// })

app.get('/', function(req, res) {
    res.send(`Welcome to UMT-apis.`)
    // let result = req.query.result;

    // let url = 'https://pelajar.mynemo.umt.edu.my/index.php?module=hepa&app=mystar&page=trans';
});

app.use(`/api`, api);

//Handle 404
app.use(function(req, res) {
    res.status(400).json({
        error:"Page not found!"
    });
});


//Handle 500
app.use(function(error, req, res, next) {
    res.status(500).json({
        error:error
    });
});


app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

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