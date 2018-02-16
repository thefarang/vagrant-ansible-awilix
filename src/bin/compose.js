'use strict'

const awilix = require('awilix')

// Route (Controller) factories
const indexRouteFactory = require('../routes/index')
const usersRouteFactory = require('../routes/users')

// UseCase factories
const indexUseCaseFactory = require('../use-cases/index')
const usersUseCaseFactory = require('../use-cases/users')

// Service factories
// Library factories
// Model factories
// Policy factories

const container = awilix.createContainer({
  injectionMode: awilix.InjectionMode.PROXY
})

container.register({
  indexRoute: awilix.asFunction(indexRouteFactory),
  usersRoute: awilix.asFunction(usersRouteFactory),
  
  IndexUseCase: awilix.asFunction(indexUseCaseFactory),
  UsersUseCase: awilix.asFunction(usersUseCaseFactory)
})

module.exports = container
