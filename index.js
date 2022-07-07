const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = 4000;
const URL_RIOT = 'https://americas.api.riotgames.com/riot/account/v1/'
const URL_VALO = 'https://na.api.riotgames.com/val/'
const HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "Origin": "https://developer.riotgames.com",
    "X-Riot-Token": process.env.REACT_APP_API_KEY
}

app.use(cors());

app.get('/', (req,res) => {
    res.json('ValoProject back-end is up and running!')
})

app.get('/content', function(req,res) {
    fetch(URL_VALO + 'content/v1/contents', {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data))
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.get('/content/:locale', (req,res) => {
    fetch(URL_VALO + `content/v1/contents?locale=${req.params.locale}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error(error));
});

app.get('/status', (req,res) => {
    fetch(URL_VALO + 'status/v1/platform-data', {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.get('/ranked/:actId', (req,res) => {
    fetch(URL_VALO + `ranked/v1/${req.params.actId}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.get('/accounts/by-riot-id/:gameName/:tagLine', (req,res) => {
    fetch(URL_RIOT + `accounts/by-riot-id/${req.params.gameName}/${req.params.tagLine}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.get('/active-shards/:puuid', (req,res) => {
    fetch(URL_RIOT + `active-shards/by-game/val/${req.params.puuid}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error (`${error.status.status_code} - ${error.status.message}`);
            });
        };
    })
    .catch(error => console.error('Error;', error));
});

app.get('/matchlists/:puuid', (req,res) => {
    fetch(URL_VALO + `matchlists/by-puuid/${req.params.puuid}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error(`${error.status.status_code} - ${error.status.message}`)
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.get('/matches/:matchid', (req,res) => {
    fetch(URL_VALO + `matches/${req.params.matchid}`, {
        method: "GET",
        headers: HEADERS
    })
    .then(r => {
        if (r.ok) {
            return r.json()
            .then(data => res.json(data));
        } else {
            return r.json()
            .then(error => {
                res.json(error);
                // res.json(`Error: ${error.status.status_code} - ${error.status.message}`);
                throw new Error(`${error.status.status_code} - ${error.status.message}`)
            });
        };
    })
    .catch(error => console.error('Error:', error));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));