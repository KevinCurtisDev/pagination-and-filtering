/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const page = document.querySelector(".page");
const studentList = Array.from(document.querySelectorAll(".student-item"));
const studentListVal = studentList.length;
const studentSearch = document.querySelector('#student-search');
const studentSearchBox = document.querySelector('#student-search-box');
const studentNames = document.querySelectorAll(".student-item .student-details h3");

//filter function
studentSearchBox.addEventListener('input', (e) => {
   studentNames.forEach(name => {
      if (!name.innerHTML.includes(e.target.value)) {
         name.parentElement.parentElement.classList.add("student-item-hide");
      } else {
         name.parentElement.parentElement.classList.remove("student-item-hide");
      }
   })
});

//create a variable to store the number of pagination buttons needed
let paginationButtonNum = Math.ceil(studentListVal/10);

//display first 10 items on initial page load
for (let i = 0; i < studentList.length; i++) {
   if (studentList.indexOf(studentList[i]) >= 10) {
      studentList[i].classList.add("student-item-hide");
   }
}

const showPage = (pageNumber) => { 
   //Hide all student items
   for (let i = 0; i < studentList.length; i++) {
      studentList[i].classList.add("student-item-hide");
   }

  //show student items between the page number and the next page number
  for(let i = 0; i < studentList.length; i++){
     if (studentList.indexOf(studentList[i]) >= pageNumber && studentList.indexOf(studentList[i]) < pageNumber+10) {
        studentList[i].classList.remove("student-item-hide");
     } 
  }
   
}


const appendPageLinks = () => {
   let paginationLinks = document.createElement('div');
   paginationLinks.classList.add('pagination');

   for (let i = 1; i <= paginationButtonNum; i++){
      let button = document.createElement('li');
      button.setAttribute("class", "link");
      button.setAttribute("href", "#");
      button.innerHTML = i;
      paginationLinks.appendChild(button);
   }
   
   page.appendChild(paginationLinks);
   paginationLinks.addEventListener('click', (e) => {
      let num = Number(e.target.innerHTML + 0);
      num -= 10;

      showPage(num);
   });
}

appendPageLinks();