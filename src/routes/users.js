'use strict'

const express = require('express')

let UsersUseCase = null

const handleRoute = (req, res, next) => {
  const page = new UsersUseCase()
  // actions
  res.render('Users', { title: 'Express' })
}

module.exports = (cradle) => {
  UsersUseCase = cradle.UsersUseCase
  const router = express.Router()
  router.use((req, res, next) => handleRoute(req, res, next))
  return router
}
