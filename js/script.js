/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


const page = document.querySelector(".page");
const studentList = Array.from(document.getElementsByClassName("student-item"));
const studentListVal = studentList.length;

//create a variable to store the number of pagination buttons needed
let paginationButtonNum = Math.ceil(studentListVal/10);


const showPage = (pageNumber) => {
   /*** 
   TODO: hide all of the items in the
   list except for the ten you want to show.
   

   Pro Tips:
     - Keep in mind that with a list of 54 students, the last page
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when
       you initially define the function, and it acts as a variable
       or a placeholder to represent the actual function `argument`
       that will be passed into the parens later when you call or
       "invoke" the function
   ***/
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
   /*** 
   TODO: generate, append, and add 
   functionality to the pagination buttons.
   ***/
   let paginationLinks = document.createElement('div');
   paginationLinks.classList.add('pagination');

   for (let i = 1; i <= paginationButtonNum; i++){
      let link = document.createElement('a');
      let button = document.createElement('li');
      button.innerHTML = i;
      link.appendChild(button);
      paginationLinks.appendChild(link);
   }
   
   page.appendChild(paginationLinks);
   paginationLinks.addEventListener('click', (e) => {
      let num = Number(e.target.innerHTML + 0);
      num -= 10;

      showPage(num);
   });
}

appendPageLinks();

