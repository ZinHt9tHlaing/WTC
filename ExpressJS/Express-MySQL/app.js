const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("./public"))

app.use(bodyParser.urlencoded({ extended: true }));

// Routes middleware
app.use(userRoutes);
app.use(postRoutes);
app.get('/', (req, res) => {
    res.render('index')
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});