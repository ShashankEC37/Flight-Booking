Flight Booking Application

Welcome to the Flight Booking Application! 
This application allows users to search for flights and book them easily.
Table of Contents

    Features
    Installation
    Usage
    Contributing
    License

Features

    User authentication: Users can sign up and log in to the application securely.
    Flight search: Users can search for flights based on their travel dates, departure and arrival cities, and number of passengers.
    Flight booking/cancel: Users can book/cancle flights and receive a confirmation email with their itinerary.

Installation

    Clone this repository to your local machine:

bash

git clone https://github.com/ShashankEC37/Flight-Booking.git

    Navigate to the project directory:

bash

cd flight-booking

    Install the dependencies:

bash

npm install

    Create a .env file in the root directory with the following environment variables:

makefile

PORT=3000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>

    Start the application:

bash

npm start

The application should now be running on http://localhost:3000.
Usage

To use the Flight Booking Application, follow these steps:

    Sign up for an account or log in if you already have one.
    Search for flights by selecting your travel dates, departure and arrival cities, and number of passengers.
    Choose a flight and review the details.
    Enter your payment information and confirm your booking.
    Receive a confirmation email with your itinerary.

As an admin, you can log in to the admin panel to manage flights, view bookings, and create new admins.
Contributing

Contributions are welcome! To contribute to this project, follow these steps:

    Fork this repository.
    Create a new branch for your feature: git checkout -b my-new-feature
    Make your changes and commit them: git commit -m 'Add some feature'
    Push your changes to the branch: git push origin my-new-feature
    Create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.
