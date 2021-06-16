const express = require('express');
require('dotenv').config();

const PORT = process.env.PORT;

const app = express();

app.get('/', (_req, res) => res.send('Está vivo!!!'));

app.listen(PORT, () => console.log(`Server aberto na porta ${PORT}.`));
