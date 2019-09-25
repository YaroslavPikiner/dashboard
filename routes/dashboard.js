const {Router} = require('express');
const router = Router()
const Ads = require('../models/add');


router.get('/dashboard', async (req,res) => {
  const adsList = await Ads.getAll();
  res.render('dashboard',{
    adsList
  })
})

module.exports = router   