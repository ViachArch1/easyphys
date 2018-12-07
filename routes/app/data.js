// Imports
const express = require('express')
const router = express.Router()

// DataBase
const data = require('../../models/db/db')

// @route   GET app/data/:topicName
// @desc    Get The Topic Data
// @access  Public
router.get('/:topicName', (req, res) => {
  switch (req.params.topicName) {
    case 'kinematics':
      res.json(data.kinematics)
      break

    default:
      res.sendStatus(404)
      break
  }
})

module.exports = router