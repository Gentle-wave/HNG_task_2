module.exports = app => {
    const personController = require('../controllers/person.controller')
    const { createPerson, 
        deletePersonById,
        getPersonById,
        updatePersonById,
    } = personController
    const express = require('express')

    let router = express.Router()

    router.post('/', createPerson)
    router.get('/:id', getPersonById)
    router.put('/:id', updatePersonById)
    router.delete('/:id', deletePersonById)

    app.use('/api', router)
}