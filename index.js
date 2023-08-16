const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');

const app = express();

app.get('/score', async (req, res) => {
  try {
    const urlParam = req.query.url;
    const response = await axios.get(urlParam);

    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      // Extract text from the first element
      const element1 = $('.country.bind[data="data.score_strip.0.name"]');
      const extractedText1 = element1.text().trim();

      // Extract text from the second element
      const element2 = $('.country.bind[data="data.score_strip.1.name"]');
      const extractedText2 = element2.text().trim();

      // Extract combined text from the first div element
      const scoreDiv1 = $('div.score-over').eq(0);
      const scoreText1 = scoreDiv1.find('span.score').text().trim();
      const oversText1 = scoreDiv1.find('span.overs-info').text().trim();
      const combinedText1 = `${scoreText1} ${oversText1}`;

      // Extract combined text from the second div element
      const scoreDiv2 = $('div.score-over').eq(1);
      const scoreText2 = scoreDiv2.find('span.score').text().trim();
      const oversText2 = scoreDiv2.find('span.overs-info').text().trim();
      const combinedText2 = `${scoreText2} ${oversText2}`;

      // Extract text from the additional span element
      const matchInfo = $('.bind.match-info.match-result[data="data.info"]').text().trim();

      // Create an object with all the extracted data
      const extractedData = {
        Team1: extractedText1,
        Team2: extractedText2,
        Score1: combinedText1,
        Score2: combinedText2,
        Status: matchInfo
      };

      res.json(extractedData);
    } else {
      res.status(500).json({ error: 'Failed to fetch data.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app