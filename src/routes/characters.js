const router = require('express').Router()
const Character = require('../models/character')

// getting all
router.get('/', async (req, res) => {
  try {
    const characters = await Character.find()
    res.json(characters)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// getting one
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const character = await Character.findById(id)
    if (!character) {
      res.status(404).json({ message: 'Character not found' })
    } else {
      res.json(character)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// adding one
router.post('/', async (req, res) => {
  try {
    const { name, lastName, house } = req.body
    const character = new Character({ name, lastName, house })
    const newCharacter = await character.save()
    res.status(201).json(newCharacter)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// updating one
router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const newCharacter = await Character.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
    if (!newCharacter) {
      res.status(404).json({ message: 'Character not found' })
    } else {
      res.json(newCharacter)
    }
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// deleting one
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const deletedCharacter = await Character.findByIdAndDelete(id)
    if (!deletedCharacter) {
      res.status(404).json({ message: 'Character not found' })
    } else {
      res.json(deletedCharacter)
    }
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
