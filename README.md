# HotRestaurantApp

## Overview

This project is a restaurant booking application that allows users to complete a booking form to request a table for reservation. It uses Node and express for handling the restaurant reservation requests and stores the data in a MySQL database.The application displays the first five bookings as current reservations, and all other bookings after this are added to a waiting list.

## Table of contents
* [About](#about)
  * [Built using](#built-using)
* [Installation](#installation)
* [Contributors](#contributors)
* [License](License)

----------

## About

* The home page gives the user the opportunity to make a reservation or view the current reservations as well as the waiting list
* By clicking on Make Reservation, it will present the user with a form built with CSS framework Bootstrap, that the user can complete
* If there are less than 5 current table reservations, then that reservation is added to the reservation list
* If there are more than 5 current table reservations, then that reservation is added to the waitlist
* The user can click on View Tables to see the current list of reservations and waitlists

## Built using

* Javascript
* Node.js
* Express
* Express-handlebars
* MySQL

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

1. The `/tables` route displays all the current reservations for the restaurant. If a user would like to make a new reservation then the `/reservation` is used which asks the user for their full name and email. This information is then stored in a MySQL database.

* THIS BIT WILL NEED UPDATING *

2. Data is saved in a MySQL database which is called using HTTP method, GET and POST. The `database.js` file creates the connection to either all data or creating new data depending on which SQL function is called.

## Contributors

* @CoreyJay98
* @Samwakelam
* @HannahSones

-------------

## License

Licensed under the [MIT License](https://choosealicense.com/licenses/mit/).    
![MIT license](https://img.shields.io/badge/license-MIT-brightgreen)
