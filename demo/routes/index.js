const express = require('express');
const router = express.Router();
const os = require('os');

/* GET home page. */

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Express', 
    runtime: `${os.platform()} ${os.release()}`,
    
  });
});

module.exports = router;
