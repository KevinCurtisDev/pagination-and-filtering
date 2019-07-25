/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


/**************************** GLOBAL VARIABLES ******************************/

const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");
const studentList = Array.from(document.querySelectorAll(".student-item"));
const studentsPerPage = 10;
const studentListVal = studentList.length;
const studentSearchBox = document.querySelector('#student-search-box');
const studentNames = document.querySelectorAll(".student-item .student-details h3");
let paginationButtonNum = Math.ceil(studentListVal / 10);//store the number of pagination buttons needed
const searchBarContainer = document.createElement('div');

/***************************************************************************/



/***************************** SEARCH BAR HTML ****************************/

searchBarContainer.setAttribute('class', 'student-search')

//Create the search bar container innerHTML
const searchBar = `  <input id="student-search-box" placeholder="Search for students...">
                     <button id="student-search">Search</button>
                  `
searchBarContainer.innerHTML = searchBar;

//Append the search bar to the page header
pageHeader.append(searchBarContainer);
/*************************************************************************/


//display first 10 items on initial page load
for (let i = 0; i < studentList.length; i++) {
   if (studentList.indexOf(studentList[i]) >= studentsPerPage) {
      studentList[i].classList.add("student-item-hide");
   }
}

//filter function
pageHeader.addEventListener('input', (e) => {
   studentNames.forEach(name => {
      if (!name.innerHTML.includes(e.target.value)) {
         name.parentElement.parentElement.classList.add("student-item-hide");
      } else {
         name.parentElement.parentElement.classList.remove("student-item-hide");
      }
   })
});


const showPage = (pageNumber) => { 
   //Hide all student items
   for (let i = 0; i < studentList.length; i++) {
      studentList[i].classList.add("student-item-hide");
   }

  //show student items between the page number and the next page number
  for(let i = 0; i < studentList.length; i++){
     if (studentList.indexOf(studentList[i]) >= pageNumber && studentList.indexOf(studentList[i]) < pageNumber + studentsPerPage) {
        studentList[i].classList.remove("student-item-hide");
     } 
  }
   
}

//Create and append page link buttons
const appendPageLinks = () => {
   let paginationLinks = document.createElement('div');
   paginationLinks.classList.add('pagination');

   for (let i = 1; i <= paginationButtonNum; i++){
      let button = document.createElement('li');
      button.setAttribute("class", "link");
      button.innerHTML = i;
      paginationLinks.appendChild(button);
   }
   
   page.appendChild(paginationLinks);
   paginationLinks.addEventListener('click', (e) => {
      let num = Number(e.target.innerHTML + 0);
      num -= studentsPerPage;

      showPage(num);
   });
}

appendPageLinks();