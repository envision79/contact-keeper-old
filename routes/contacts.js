const express = require('express');
const router = express.Router();

// @route     GET api/contacts
// @desc      GET all user contacts
// @access    PRIVATE
router.get('/', (req, res)=> {
    res.send("get all user contacts");
});


// @route     POST api/contacts
// @desc      add new contact
// @access    Private
router.post('/', (req, res)=> {
    res.send("add new contact");
});


// @route     PUT api/contacts/:id
// @desc      add new contact
// @access    Private
router.put('/:id', (req, res)=> {
    res.send("update a contact");
});



// @route     DELETE api/contact/:id
// @desc      delete contact
// @access    Private
router.delete('/', (req, res)=> {
    res.send("delete contact");
});

module.exports = router;