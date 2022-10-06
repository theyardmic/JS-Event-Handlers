let button = document.querySelector('#btn');

//Onclick event
function handler() {
  alert("Thank you for your submission!");  //function to be called in the case of an event
  }

  button.addEventListener('click', handler);  //event listener
  
//on mouseover(hover)
  function mouser() {
  alert("Thank you for your submission!");
  }

  button.addEventListener('mouseover', mouser);
