/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = [
    {
      name: "Section 1",
      id: "section1",
      datanav: "Section 1",
    },
    {
        name: "Section 2",
        id: "section2",
        datanav: "Section 2",
      },
      {
        name: "Section 3",
        id: "section3",
        datanav: "Section 3",
      },
      {
        name: "Section 4",
        id: "section4",
        datanav: "Section 4",
      },
  ];

    document.getElementById('navbar__list');
    const navMenu = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
document.addEventListener('DOMContentLoaded',createNavi);


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const createNavi = sections.forEach(function (section){
  const secId = section.id;
  const dataNavigate = section.datanav;
  const navList = document.createElement('li');
  const navAnc = document.createElement('a');
  navAnc.textContent = dataNavigate;
  navAnc.href = `#${section.id}`;
  navAnc.classList.add('menu__link');
  navList.appendChild(navAnc);
  navMenu.appendChild(navList);
});

// for (i = 0; i < section.length; i++) {
//   const secId = section.id;
//   const dataNavigate = `${section.datanav}`;
//   const navList = document.createElement('li');
//   const navAnc = document.createElement('a');
//   navAnc.textContent = dataNavigate;
//   navAnc.href = `#${section.id}`;
//   navAnc.classList.add('menu__link');
//   navList.appendChild(navAnc);
//   navMenu.append(navList);
//   console.log(navMenu);
// }

// sections.forEach(function (section){
//   for (i = 0; i < section.length; i++) {
//     const secId = section.id;
//     const dataNavigate = `${section.datanav}`;
//     const navList = document.createElement('li');
//     const navAnc = document.createElement('a');
//     navAnc.textContent = dataNavigate;
//     navAnc.href = `#${section.id}`;
//     navAnc.classList.add('menu__link');
//     navList.appendChild(navAnc);
//     navMenu.append(navList);
//     console.log(navMenu);
//   }
// });

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


