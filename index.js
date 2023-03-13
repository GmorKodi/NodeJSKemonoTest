const express = require('express');
const axios = require('axios')


const app = express();

app.get('/', (req, res) => {
  res.send('Hello Express app!')

  axios.get('http://kemono.party/patreon/user/55009653/')
  
  // Show response data
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
  
});

app.listen(3000, () => {
  console.log('server started');
});
