const express = require('express');

const router = express.Router();
const airlineController = require("../controllers/airlineController");
const fligetController = require("../controllers/flightController");
const reviewController = require("../controllers/reviewController");
const bookingController = require("../controllers/bookingController");

router.post("/airline", airlineController.createAirline );
router.get("/airline/:name", airlineController.getAirline );
router.get("/airline", airlineController.getAllAirlines );
router.delete("/airline/:name", airlineController.destroyAirline );
router.put("/airline",airlineController.updateAirline)


router.post("/flight", fligetController.createFlight );
router.get("/flight/:flightNumber", fligetController.getFlight );
router.get("/flight", fligetController.getAllFlights );
router.delete("/flight", fligetController.destroyFlight );
        
router.post("/review", reviewController.createReview );
router.get("/review/:flightId/:userId", reviewController.getReview );
router.get("/review/:flightId", reviewController.getAllReviews );
router.delete("/review/:flightId", reviewController.destroyReview );

        
router.post("/booking", bookingController.createBooking );
router.get("/booking/:id/boardingPass", bookingController.boardingPass );
router.delete("/booking/:id", bookingController.cancleBooking);
module.exports = router;


