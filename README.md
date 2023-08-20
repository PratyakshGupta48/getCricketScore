# Free Cricket API 🏏  

Node.js Version - Get Live Cricket Score data from `SportsKeeda`  

This is an unofficial API and not Linked or Partnered with Any Brands/Company.  

## How it Works? 🤔

Build using Node.js and cheerio.js - using cheerio for Scrape the data and Converted in JSON API with the Help of Express Server.

Everything is scraped live and shown to end users in realtime.  

**API URL**

- Live Match Data - `http://localhost:3000/live`
- Get Live data from the URL - `http://localhost:3000/score?url=<Live Match URL>`   

## Requirements 📑

- Server With Latest LTS Node.JS Support and Nginx (For Self Host)
- HTTPS for Secure SSL Connection

(OR)

- use Vercel or Heroku Free Cloud Hosting

## Installation and Development 📥

- Download the Clone the Repo

```sh
git clone https://github.com/PratyakshGupta48/getCricketScore.git
cd getCricketScore
```

- install Node Modules via `npm`

- Test Locally

```sh
npm start
```

## Usage 🍟

- Get the Live Match Score URL from - `(https://www.sportskeeda.com/live-cricket-score)`

### Example 📋

```sh
http://localhost:3000/score?url=https://www.sportskeeda.com/live-cricket-score/united-arab-emirates-vs-new-zealand-match-3-20-august-2023
```  
