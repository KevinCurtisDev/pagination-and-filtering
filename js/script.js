/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/


/**************************** GLOBAL VARIABLES ******************************/

const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");

//Initial list of students
const studentList = Array.from(document.querySelectorAll(".student-item"));

//Dynamically changing list of students
let activeStudentList = [];

const studentNames = document.querySelectorAll(".student-item .student-details h3");
const studentsPerPage = 10;
let activeCount = studentList.length;
let paginationButtonNum = Math.ceil(activeCount / studentsPerPage);
const searchBarContainer = document.createElement('div');
const paginationLinks = document.createElement('div');
paginationLinks.classList.add('pagination');


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




/****************************INITIAL DISPLAY *****************************/

const initialDisplay = () => {
   for (let i = 0; i < studentList.length; i++) {
      //Add a data attribute indicating that all student elements are active
      studentList[i].setAttribute("data", "active");
      activeStudentList.push(studentList[i]);

      if (studentList.indexOf(studentList[i]) >= studentsPerPage) {
         studentList[i].classList.add("student-item-hide");
      }
   }
}

initialDisplay();


/************************* DISPLAY STUDENTS ON SPECIFIC PAGES **********************/

const showPage = (pageNumber) => { 
   //Hide all student items
   for (let i = 0; i < activeStudentList.length; i++) {
      //Hide all student elements
      activeStudentList[i].classList.add("student-item-hide");

      //conditional statement for displaying specific set of students
      if (activeStudentList.indexOf(activeStudentList[i]) >= pageNumber 
         && activeStudentList.indexOf(activeStudentList[i]) < pageNumber + studentsPerPage) {
         activeStudentList[i].classList.remove("student-item-hide");
      } 
   }
}

/*************************** CREATE & ADD PAGE LINK BUTTONS ************************/
const appendPageLinks = (num) => {

   paginationLinks.innerHTML = "";

   for (let i = 1; i <= num; i++){
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

//call appendPageLinks for initial onload 
appendPageLinks(paginationButtonNum);


/************************* FILTER THE LIST FOR SEARCHED NAMES **************************/

pageHeader.addEventListener('input', (e) => {

   //Set active student list to empty
   activeStudentList = [];

   activeCount = studentList.length;
   studentNames.forEach(name => {

      //add data active attribute to each student item
      name.parentElement.parentElement.setAttribute("data", "active");
      //populate active student list with all students
      activeStudentList.push(name.parentElement.parentElement);

      //check if each student matches the search parameter
      if (!name.innerHTML.includes(e.target.value)) {
         //hide non matching items and remove active attribute
         name.parentElement.parentElement.classList.add("student-item-hide");
         name.parentElement.parentElement.removeAttribute("data");
         
         //remove non matches from the active student list
         activeStudentList.pop(activeStudentList[activeStudentList.indexOf(name.parentElement.parentElement)]);
      } else {
         //otherwise show the item
         name.parentElement.parentElement.classList.remove("student-item-hide");
      }
   });

   //reset the page links container to empty
   paginationLinks.innerHTML = "";
   paginationButtonNum = Math.ceil(activeStudentList.length / studentsPerPage);
   //Add links based on new list of students
   appendPageLinks(paginationButtonNum);

   //Finally loop through active student list and only display at most 10 students per page
   for (let i = 0; i < activeStudentList.length; i++) {
      if (activeStudentList.indexOf(activeStudentList[i]) >= studentsPerPage) {
         activeStudentList[i].classList.add("student-item-hide");
      }
   }
});

document.getElementById('student-search').addEventListener('click', () => {
   document.getElementById('student-search-box').value = "";
});



appendPageLinks(paginationButtonNum);