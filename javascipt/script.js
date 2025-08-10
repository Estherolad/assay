          
    
    
    
    document.addEventListener("DOMContentLoaded", function () {
    const servicesLink = document.getElementById("servicesLink");

    // Only navigate if the dropdown is not open
    servicesLink.addEventListener("click", function (e) {
      const dropdownMenu = document.querySelector("#servicesLink + .dropdown-menu");
      
      // If dropdown is already shown, let Bootstrap handle it
      if (dropdownMenu.classList.contains("show")) {
        return;
      }

      // Prevent default toggle behavior & navigate
      e.preventDefault();
      window.location.href = servicesLink.getAttribute("href");
    });
  });      
 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   document.addEventListener("DOMContentLoaded", function () {
//     const servicesLink = document.getElementById("servicesLink");

//     // Allow normal click to go to the link
//     servicesLink.addEventListener("click", function (e) {
//       // Only go to link if dropdown is not open
//       if (!servicesLink.classList.contains("show")) {
//         window.location.href = servicesLink.getAttribute("href");
//       }
//     });

//     // Optional: Open dropdown on hover (desktop only)
//     const dropdown = servicesLink.closest('.dropdown');
//     if (window.innerWidth >= 992) {
//       dropdown.addEventListener("mouseover", function () {
//         const dropdownMenu = dropdown.querySelector('.dropdown-menu');
//         dropdownMenu.classList.add('show');
//         servicesLink.classList.add('show');
//       });
//       dropdown.addEventListener("mouseleave", function () {
//         const dropdownMenu = dropdown.querySelector('.dropdown-menu');
//         dropdownMenu.classList.remove('show');
//         servicesLink.classList.remove('show');
//       });
//     }
//   });        
