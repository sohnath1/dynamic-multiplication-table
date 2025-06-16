# Dynamic Multiplication Table Web App

This project is a single-page web application that allows users to dynamically generate a multiplication table based on four numerical inputs: the start and end values of both multipliers (horizontal row) and multiplicands (vertical columns).
The resulting table is displayed in a scrollable container with sticky headers , and includes validation to ensure logical inputs. The app is built using  HTML, CSS, and JavaScript.

## About the files

### `index.html`

> Main HTML file for this dynamic multiplication table web app. 
  It defines the structure of the page, with the form where users input the start and 
  end values for the rows and columns. The file  links to an external CSS file 
  for styling and a JavaScript file for functionality.

### `style.css`

>  
   This file styles the form inputs, button, and output areas. Also styles
   the multiplication table, which is  scrollable with sticky headers so the top row
   and first column stay visible. I decided on a overrall pink theme for the site. 
    The table is white for easier readability, however.

### `script.js`

> This file handles the logic for reading the inputs, 
validating it, and dynamically creating the multiplication table. It ensures that the user inputs are 
logically correct (start values must not exceed the end values). If invalid input is detected, 
an error message is shown. If the inputs are valid, a table is generated. 
Each header labels the rows and columns
appropriately.

---

## Validation Rules

- End value for row must be ≥ start value
- End value for column must be ≥ start value
- If not, an error message is shown and no table is rendered.

---

## How to Use
- Open `dynamicmulttable.html` in a browser.
- Fill out the four input fields.
- Click the button to submit (labeled *create your table!*)
- View your custom multiplication table below the form.

## Author

*Dynamic Multiplication Table*  
Crafted with HTML, CSS, and JavaScript.
Created by Sohini Nath, UML 2025

---
