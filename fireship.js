// RESTful API
const express = require('express');

// express package is a function
const app = express();

const PORT = 8080;

// URI
// https://api.com/v2/comet
// network location - https://api.com/v2/
// resource - comet

// API Requests
// use Insomnia or curl command [Linux]

// Structure: request -> middleware -> response

// Middleware
// Not everyone uses express to build json api
app.use(express.json());

// GET
app.get('/tshirt', (req, res) => {
    // 200 - OK
    res.status(200).send({
        tshirt: '👕',
        size: 'large'
    });
});

// POST
app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo)
        // 418 - I'm a teapot
        res.status(418).send({
            message: 'Logo not found.'
        });
    else
        res.send({
            tshirt: `👕 with your ${logo} and ID of ${id}`
        });
});

// Fire up API
exports.fireship = () => {
    app.listen(
        PORT,
        () => {
            console.log(`alive on http://localhost:${PORT}`)
        }
    );
}
    



