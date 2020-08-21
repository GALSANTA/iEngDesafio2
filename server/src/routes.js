const express = require('express');
const UserController = require("./controllers/UserController");
const router = express.Router();


router.get('/', function(request, response) {
    response.status(200).send({ "SEKIGAHARA": "BATALHA"})
});
router.post('/', UserController.store);

module.exports = router;