# Assignment 4 JavaScript Utilization
## Purpose
This project is meant to show proficiency over the use of JS in an html project. The project incoorporates functions, input and output, multiple variables of varying 
datatypes, conditionals, arrays, and objects.
## Application
The project will be a basic table containing top graphics cards and their prices. When clicked the table will sort by price, either highest to lowest or vice versa. The 
program will include a webpage scraper that pulls the prices of the cards from Amazon using the axios, cheerio, and node-cron libraries. Axios will be used to pull the 
website for scraping, cheerio will be used to collect the data from the websites element, and node-cron will be used to update the scraper. 

## Post Implementation
Unfortunately I struggled to get the hang of axios, node-cron, and cheerio. I was able to succesfully pull some data and print it out onto a localhost server via the 
express library and nodemon, but this only allowed for the data to be stored on the localhost server and I couldnt find a way to fetch the information that was pulled
and use it in the table. This led me to create an additional file with a fixed table that includes manually input data found on amazon and pcbenchmark that serves the
same purpose as the planned code sans the automation. Additionally, I added a sort function that sorts the price, benchmark, and compared value of each listed item on
the table when you click on the column title. I have included both the main.html file, the import.js file, and the app.js file for grading. The main.html serves as the
driver html file for the program. The import.js file includes the scripts and functions used in the html file. And the app.js file contains all the code used for the 
attempted website scraping. Again, this uses axios, cheerio, nodemon, and express to function. In the terminal I ran the command npm start to initialize the server for
the scraping. In the future I will do more research on how to use these libraries and see if there are other libraries that would suit my needs better. Otherwise, I 
think if I were to follow through with these libraries I would find a way to export the data to a .json file and then convert that .json to a dictionary in a seperate
.js script that would then initialize the datatable used for the html script.
