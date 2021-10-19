const express = require('express');
const path = require('path');
const app = express();

const port = 4200;

const paths = {
  index: __dirname + '/src/index.html',
  welcome: __dirname + '/src/pages/welcome.html',
  home: __dirname + '/src/pages/home.html',
  music: __dirname + '/src/pages/music.html',
};

app.use(express.static(path.resolve(__dirname, 'src')));

app.get('/', (req, res) => res.sendFile(paths.index));
app.get('/welcome', (req, res) => res.sendFile(paths.welcome));
app.get('/home', (req, res) => res.sendFile(paths.home));
app.get('/music', (req, res) => res.sendFile(paths.music));


app.listen(port, () =>
  console.log(`Deezer Clone listening at http://localhost:${port}`)
);
