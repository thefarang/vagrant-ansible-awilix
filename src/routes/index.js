'use strict'

const express = require('express')

let IndexUseCase = null

const handleRoute = (req, res, next) => {
  const page = new IndexUseCase()
  // actions
  res.render('index', { title: 'Express' })
}

module.exports = (cradle) => {
  IndexUseCase = cradle.IndexUseCase
  const router = express.Router()
  router.use((req, res, next) => handleRoute(req, res, next))
  return router
}
