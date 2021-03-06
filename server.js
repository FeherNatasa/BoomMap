const express = require('express'),
    bodyParser = require('body-parser'),
    app = express(),
    cors = require("cors");

const graphRoutes = require("./routes/graphRoutes");
const database = require("./config/database");

app.use(cors());
app.use("/api/graph", graphRoutes);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;
database.connect((err) => {
    if (err) {
        console.log("Unable to connect database");
        process.exit(1);
    } else {
        console.log("Connected to database");
        app.listen(port, () => console.log(`Server started on port ${port}`));
    }
});

