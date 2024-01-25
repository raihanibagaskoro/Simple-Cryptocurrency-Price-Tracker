require('dotenv').config();
const express = require('express');
const UserController = require('./controllers/UserController');
const WatchlistController = require('./controllers/WatchlistController');
const authentication = require('./middlewares/authentication');
const app = express();
const PORT = 3000;

//
app.use(express.urlencoded({ extended: true }));

app.post('/login', UserController.login);
app.post('/register', UserController.register);

app.use(authentication);

app.post('/addList', WatchlistController.addList);
app.get('/watchlist', WatchlistController.getWatchlist);
app.delete('/deleteList/:id', WatchlistController.deleteList);


app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
    });