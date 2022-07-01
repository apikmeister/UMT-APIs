const express = require('express');
const api = express();
const PORT = 8080;

api.use(express.json())

api.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
);

//run function after get
api.get('/tshirt', (req, res)/*request(incoming) and response(outgoing)*/ => {
    res.status(200).send({/*data payload*/
        tshirt : 'wow',
        size : 'medium'
    })
});

//dynamic url param
api.post('/tshirt/:id'/*capture dynamic value in URL*/, (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `Shirt with your ${logo} and ID of ${id}`,
    });
});