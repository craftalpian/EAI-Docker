const express = require('express');
const spacecrafts = require('../services/spacecrafts');
const router = new express.Router();
 
router.get('/:spacecraftId', async (req, res, next) => {
  let options = { 
    "spacecraftId": req.params.spacecraftId,
  };


  try {
    const result = await spacecrafts.getSpacecraftId(options);
    res.status(result.status || 200).send(result.data);
  }
  catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.'
    });
  }
});

module.exports = router;