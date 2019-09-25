const {Router} = require('express');
const router = Router()
const Ads = require('../models/add');



router.get('/add',(req,res) => {
  res.render('add',{
    title: 'Добавить обьявление'
  })
})

router.post('/add', async (req,res) => {
  const ads = new Ads(req.body.firstName,
                      req.body.description,
                      req.body.price,
                      req.body.phone,
                      req.body.image,
                      req.body.author)
  await ads.save()
  res.redirect('/dashboard')
})

module.exports = router 