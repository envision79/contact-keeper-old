const express = require('express');
const router = express.Router();




// @route     GET api/AUTH
// @desc      GET LOGGED IN USER
// @access    PRIVATE
router.get('/', (req, res)=> {
    res.send("GET LOGGED IN USER");
});


// @route     POST api/AUTH
// @desc      GET LOGGED IN USER
// @access    Public
router.post('/', (req, res)=> {
    res.send("log IN USER");
});


module.exports = router;