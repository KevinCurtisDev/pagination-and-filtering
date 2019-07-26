# Pagination and Filtering
## Summary

A pagination and filtering application built with vanilla JavaScript (project 2 of the full stack JavaScript tech degree from Treehouse). THe application allows users to page through a list of fictional students or to search the list using a text search input. The display is dynamically updated in response to the user's actions on the page.

View the project hosted on github pages: [pagination and filtering app](https://kevincurtisdev.github.io/pagination-and-filtering/)

## Features

Pagination:
A list of students of any length is loaded. The list is split into pages  that display 10 entries at most. Users can page through the list by clicking on page links. Doing this dynamically populates the display with entries associated with the page clicked.

Filtering:
A search box allows users to filter the list of entries based on the name of each entry. As a search term is typed into the search bar, the list of entries dynamically populates the page with matching entries.

## Dependencies

* HTML5
* CSS3
* vanilla JavaScript

## Deployment

The app is deployed to github pages and can be viewed at the above link.

To run the project locally: 

* Clone or download the repo.
* From your terminal/command line, cd into the project folder;
* If you have python3 installed, runn the following command: python3 -m http.server

## Sample code

This function dynamically creates pagination buttons in the dom:

```JavaScript

/*************************** CREATE & ADD PAGE LINK BUTTONS ************************/
const appendPageLinks = (num) => {

   paginationLinks.innerHTML = "";

   for (let i = 1; i <= num; i++){
      let button = document.createElement('li');
      button.setAttribute("class", "link");
      button.innerHTML = i;
      paginationLinks.appendChild(button);
   }

   paginationLinks.children[0].classList.add("active");
   
   let pageCount = paginationLinks.children.length;

   page.appendChild(paginationLinks);
   paginationLinks.addEventListener('click', (e) => {
      for (let i = 0; i < pageCount; i++) {
         paginationLinks.children[i].setAttribute('class', 'link');
      }

      e.target.setAttribute('class', 'active');
      let num = Number(e.target.innerHTML + 0);
      num -= studentsPerPage;

      showPage(num);
   });
}

```

## Resources

The list of student elemnts and the css file were supplied by Treehouse.com.