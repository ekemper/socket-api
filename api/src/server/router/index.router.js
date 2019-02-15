const express = require('express')
const router = express.Router()

router.get('/camp-bueno', async (req, res, next) => {
  res.json({
    message: 'healthy!'
  })
})

router.get('/', function(req, res) {
  res.sendFile(__dirname + '../../../../vue/index.html')
})

router.get('/health', async (req, res, next) => {
  res.json({
    message: 'healthy!'
  })
})

module.exports = {
  router,
  basePath: '/'
}
