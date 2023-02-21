const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

const PORT = process.env.PORT || 3000;

const website = 'https://www.amazon.com/s?k=4090&crid=2IR8NM7BIETFT&sprefix=4090%2Caps%2C273&ref=nb_sb_noss_1';

try {
  axios(website).then((res) => {
    const data = res.data;
    const $ = cheerio.load(data);

    let content = [];

    $('.a-price-whole', data).each(function () {
      const title = $(this).text();
      const url = $(this).find('a').attr('href');

      content.push({
        title,
        url,
      });

      app.get('/', (req, res) => {
        res.json(content);
      });
    });
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on PORT:${PORT}`);
});