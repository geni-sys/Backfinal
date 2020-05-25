const routes = require('express').Router()

routes.get('/', (req, res) => {
  return res.send({
    greeting: 'Hello world!'
  })
})

module.exports = routes