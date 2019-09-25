const {Router} = require('express');
const router = Router()


router.get('/add',(req,res) => {
  res.render('add',{
    title: 'Добавить обьявление'
  })
})

router.post('/add', (req,res) => {
  console.log(req.body)

  res.redirect('/dashboard')
})

module.exports = router 