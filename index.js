const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)  => {
    res.send({
        status: true,
        data: 'Jenkins setup is done'
    })
})

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})