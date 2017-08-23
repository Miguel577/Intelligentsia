const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const api = require('./backend/routes');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

app.use(bodyParser.urlencoded({ extended: false }));

// routes
// const authRoutes = require('./server/routes/auth');
// app.use('/auth', authRoutes);

app.use('/api', api);

app.listen(PORT, error => {
    error
    ? console.error(error)
    : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`);
});
