// function showSection(sectionId) {
//     // Hide the default image
//     document.getElementById('default-image').style.display = 'none';

//     // Hide all sections
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(section => section.style.display = 'none');

//     // Show the selected section
//     const sectionToShow = document.getElementById(sectionId);
//     if (sectionToShow) {
//         sectionToShow.style.display = 'block';
//     }
// }

// // Optional: Show the information section by default
// document.addEventListener('DOMContentLoaded', () => {
//     showSection('information');
// });
// // Ensure this is in your script.js

// function showSection(sectionId) {
//     // Hide the default image
//     document.getElementById('default-image').style.display = 'none';

//     // Hide all sections
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(section => section.style.display = 'none');

//     // Show the selected section
//     const sectionToShow = document.getElementById(sectionId);
//     if (sectionToShow) {
//         sectionToShow.style.display = 'block';
//     }
// }

// // Optional: Show the information section by default
// document.addEventListener('DOMContentLoaded', () => {
//     showSection('information');
// });
// script.js
// document.addEventListener('DOMContentLoaded', () => {
//     // Show default image in main section
//     document.getElementById('default-image').style.display = 'block';
//   });
  
//   // Function to update main section content when sidebar section is clicked
//   function showSection(sectionId) {
//     // Hide default image
//     document.getElementById('default-image').style.display = 'none';
  
//     // Hide all sections
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(section => section.style.display = 'none');
  
//     // Show the selected section
//     const sectionToShow = document.getElementById(sectionId);
//     if (sectionToShow) {
//       sectionToShow.style.display = 'block';
//     }
//   }
document.addEventListener('DOMContentLoaded', () => {
    // Show home section by default
    showSection('home');
  });
  
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.style.display = 'none');
  
    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
      sectionToShow.style.display = 'block';
    }
  }
  
  // Show home section by default
  showSection('home');

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("demo");
    const captionText = document.getElementById("caption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}
// Function to show or hide the contact section
// script.js
// const awardsData = [
//     { year: 2010, award: "Grammy Award for Album of the Year" },
//     { year: 2012, award: "American Music Award for Favorite Pop/Rock Female Artist" },
//     { year: 2014, award: "Billboard Music Award for Top Artist" },
//     { year: 2016, award: "Grammy Award for Album of the Year" },
//     { year: 2019, award: "American Music Award for Artist of the Decade" },
//     // Add more awards data here
//   ];
  
//   function showSection(sectionId) {
//     // Hide all sections
//     const sections = document.querySelectorAll('.content-section');
//     sections.forEach(section => section.style.display = 'none');
  
//     // Show the selected section
//     const sectionToShow = document.getElementById(sectionId);
//     if (sectionToShow) {
//       sectionToShow.style.display = 'block';
  
//       // Generate timeline items for awards section
//       if (sectionId === 'awards') {
//         const timelineUl = sectionToShow.querySelector('.timeline ul');
//         awardsData.forEach(award => {
//           const timelineItem = document.createElement('li');
//           timelineItem.innerHTML = `${award.year} - ${award.award}`;
//           timelineUl.appendChild(timelineItem);
//         });
//       }
//     }
//   }

