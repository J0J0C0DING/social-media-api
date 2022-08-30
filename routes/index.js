const router = require('express').Router();

// Import all API routes
const apiRoutes = require('./api');

// add prefix of api for api routes
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>Something went wrong!</h1>');
});

module.exports = router;
