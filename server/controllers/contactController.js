const Contact = require("../models/contactModel");
const mongoose = require('mongoose')

const createContact = async (req, res) => {
    const {name, company_name, email, phone, msg} = req.body

    // add doc to db
    try{
        const contact = await Contact.create({name, company_name, email, phone, msg});
        res.status(200).json(contact);
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createContact
}