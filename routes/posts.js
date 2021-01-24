const express = require('express');
const router = express.Router();

/* GET posts page. */
router.get('/', (req, res, next) => {
  res.render('posts');
});

// router.get('/posts', (req, res) => {
//   const name = req.param("name")
//   const body = req.param("body")
//   if ( !name || !body ) {
//     res.send('名前もしくは本文を入力してください')
//     return
//   }
//   res.redirect("/")
// })

module.exports = router;