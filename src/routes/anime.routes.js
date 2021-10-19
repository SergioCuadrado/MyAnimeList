const express = require('express');
const router = express.Router();

router.get('/api', (req, res) => {
  var user = req.app.get('user');
  res.write(user);
});

module.exports = router;
