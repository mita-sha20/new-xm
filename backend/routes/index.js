const express = require('express')
const route = express.Router()
const apiRoutes = require('./api')

route.use(process.env.API_URL, apiRoutes)


module.exports = route;