# HotRestaurantApp

## Overview

This project is a restaurant booking application that allows users to complete a booking form to request a table for reservation. It uses Node and express for handling the restaurant reservation requests and stores the data in a MySQL database.The application displays the first five bookings as current reservations, and all other bookings after this are added to a waiting list.

## Table of contents
* [About](#about)
  * [Built using](#built-using)
* [Installation](#installation)
* [Functionality](#functionality)
* [Contributors](#contributors)
* [License](License)

----------

## About

* The Hot Resturant app's home page presents the user with the opportunity to make a reservation or view the current reservations as well as the waiting list
* By clicking on Make Reservation, the user is presented with a form built using CSS framework Bootstrap, that the user can complete
* If there are less than 5 current table reservations, then that reservation is added to the reservation list
* If there are more than 5 current table reservations, then that reservation is added to the waitlist
* The user can click on View Tables to see the current list of reservations and waitlists

## Built using

* Javascript
* Node.js
* Express
* Express-handlebars
* MySQL
* Sequelize

---------------

## Installation

* Clone the Git repository onto your local machine
* Navigate to the folder where the repository exists
* Run the command $ npm init
* cd into the server folder
* Then run the command $ node server
* Open your browser and search for localhost:3000

-------------------

## Functionality

1. This application uses express to create routes for a server and serve data to and from a database file.

2. The `/tables` route displays all the current reservations for the restaurant. If a user would like to make a new reservation then the `/reservation` form is used which asks the user for their full name, phone number and email. Input is validated using RegExr and this information is then stored in a MySQL database.

3. The data saved in a MySQL database is called using HTTP methods, GET, POST and DELETE. The `database.js` file creates the connection to either all data or creating new data depending on which SQL function is called.

4. To improve user experience, a delete reservation button has been added. This requires the user to enter their email address and reservation ID to confirm and validate the correct booking to be deleted. The reservation ID is provided to the user upon booking and this is the unique value used to identify specific bookings in the MySQL database.

5. A `.env` file has been created to store configuration in the environment separate from code, keeping personal passwords protected and hidden.

6. The code has since been refactored to make use of express handlebars - a templating engine for node/JavaScript to manipulate the HTML code from the server side.

7. This was then taken once step further, refactoring the code to incorporate sequelize with MySql. This puts the data into objects which is easier to then manipulate.

----------------

## Contributors

* [@CoreyJay98](https://github.com/coreyjay98)
* [@Samwakelam](https://github.com/Samwakelam)
* [@HannahSones](https://github.com/HannahSones)

-------------

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).    
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
