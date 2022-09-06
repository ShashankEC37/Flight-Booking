const express = require('express');

const router = express.Router();
const helpController = require("../../controllers/helpController");
const airlineController = require("../../controllers/airlineController");
const fligetController = require("../../controllers/flightController");

router.get("/help", helpController.helpDetails);

router.post("/airline", airlineController.createAirline );
router.get("/airline/:name", airlineController.getAirline );
router.get("/airline", airlineController.getAllAirlines );
router.delete("/airline", airlineController.destroyAirline );


router.post("/flight", fligetController.createFlight );
router.get("/flight/:flightNumber", fligetController.getFlight );
router.get("/flight", fligetController.getAllFlights );
router.delete("/flight", fligetController.destroyFlight );
        

module.exports = router;