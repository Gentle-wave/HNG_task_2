const db = require('../models')
const Person = db.Person

const createPerson = async (req, res) => {
  try {
    const { name } = req.body;

    if (typeof name !== 'string') {
      return res.status(400).json({ error: 'Name must be a string' });
    }

    const person = await Person.create({ name });

    if (person) {
      return res.status(201).json({
        statusCode: 201,
        status: 'success',
        message: 'Person created successfully',
        data: person,
      });
    }
  } catch (error) {
    console.error('Error creating person: ', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

const getPersonById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: 'Invalid or missing ID',
      });
    }

    const person = await Person.findByPk(id);

    if (person) {
      return res.status(200).json({
        statusCode: 200,
        status: 'success',
        message: 'Person retrieved successfully',
        data: person,
      });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: 'error',
        message: 'Person not found',
      });
    }
  } catch (error) {
    console.error('Error retrieving person by ID: ', error);
    return res.status(500).json({ error: 'Internal server error' || error.message });
  }
};


const deletePersonById = async (req, res) => {
  try {
    const { id } = req.params; 

    if (!id || isNaN(id)) {
      return res.status(400).json({
        message: 'Invalid or missing ID',
      });
    }

    const deletedRowCount = await Person.destroy({
      where: { id },
    });

    if (deletedRowCount > 0) {
      return res.status(200).json({
        statusCode: 200,
        status: 'success',
        message: 'Person deleted successfully',
      });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: 'error',
        message: 'Person not found',
      });
    }
  } catch (error) {
    console.error('Error deleting person by ID: ', error);
    return res.status(500).json({ error: 'Internal server error' || error.message });
  }
};

const updatePersonById = async (req, res) => {
  try {
    const { id } = req.params; 
    const { newName } = req.body;

    if (!id || isNaN(id) || typeof newName !== 'string') {
      return res.status(400).json({ error: 'Invalid ID or newName is not a string' });
    }

    const personToUpdate = await Person.findByPk(id);

    if (personToUpdate) {
      await personToUpdate.update({ name: newName });

      return res.status(200).json({
        statusCode: 200,
        status: 'success',
        message: `Person with ID ${id} has been successfully updated his name  to ${newName}`,
        data: personToUpdate,
      });
    } else {
      return res.status(404).json({
        statusCode: 404,
        status: 'error',
        message: 'Person not found',
      });
    }
  } catch (error) {
    console.error('Error updating person by ID: ', error);
    return res.status(500).json({ error: 'Internal server error' || error.message });
  }
};

module.exports = {
  createPerson,
  deletePersonById,
  getPersonById,
  updatePersonById,
};
