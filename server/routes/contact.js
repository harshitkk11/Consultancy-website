const express = require('express')

const { createContact } = require('../controllers/contactController');

const router = express.Router()

router.get('/', (req, res) => {
    res.json("Hello")
})

router.post("/contactus", createContact)

module.exports = router;