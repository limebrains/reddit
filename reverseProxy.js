var express = require("express");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var app = express();
const axios = require('axios');


app.get('/api',function(req,res) {
  res.setHeader('Content-Type', 'application/json');


  axios.get('https://oauth.reddit.com/api/v1/me', {},
    {headers: {
      'Authorization': 'bearer _NMRSIXQmE5AMs8EjBr9na0HanQ',
    }}
  ).then((response) => {
    console.log(response);
    res.send(JSON.stringify(response.data));
  }, (response) => {
    console.log(response);
    res.send(JSON.stringify(response.data));
  })
});

app.listen(3001);
