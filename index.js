const express = require('express');

const app = express();

require('./routes/authRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    // Express will serve production assets (main.js || main.css)
    app.use(express.static('client/build'));

    // Express will serve index.html if it doesnt recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
