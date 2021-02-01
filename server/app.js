require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');
const app = express();

app.use(cors({
    origin: 'http://localhost:3001'
}));


const port = process.env.port || 3000;
const baseOMDBLink = "https://www.omdbapi.com/?apikey=" + process.env.OMDB_KEY;

console.log(baseOMDBLink);
console.log(process.env.port + " port");
console.log(process.env.FOO);
app.use(bodyParser.urlencoded({ extended: true }));

//home page
app.get('/', (req, res) => {
    console.log("Here is the api key" + process.env.OMDB_KEY);
    res.sendFile(__dirname + '/index.html')
    console.log("Here is the api key" + process.env.OMDB_KEY);
});

//When user tries to search for media, it is fowarded to this endpoint. 
app.get('/findLog', (req, res) => {
    const logTitle = req.query.searchedLog;
    let body = "";
    console.log(`${logTitle} is the searched string`)
    const request = https.request(baseOMDBLink + "&t=" + logTitle, (response) => {
        console.log(res.statusCode);
        console.log(res.header);

        response.on("data", (data) => {
            body += data;
        })
        response.on('end', () => {
            const logJSON = JSON.parse(body);
            console.log(logJSON);
            const logData = { logTitle: logJSON.Title, logPlot: logJSON.Plot, logReleaseDate: logJSON.Released, logPoster: logJSON.Poster };
            res.send(logData);

        }).on('error', (error) => {
            console.error(error.message);
        });
    })

    request.end();
});
app.listen(port, () => {
    console.log(`Lumberjacks are awaiting your orders at http://localhost:${port}`)
})
