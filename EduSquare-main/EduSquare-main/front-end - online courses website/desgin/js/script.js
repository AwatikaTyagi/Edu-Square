// Dark mode algorithm
let toggleBtn = document.getElementById('toggle-btn');
let body = document.body;
let darkMode = localStorage.getItem('dark-mode');

const enableDarkMode = () =>{
   toggleBtn.classList.replace('fa-sun', 'fa-moon');
   body.classList.add('dark');
   localStorage.setItem('dark-mode', 'enabled');
}

const disableDarkMode = () =>{
   toggleBtn.classList.replace('fa-moon', 'fa-sun');
   body.classList.remove('dark');
   localStorage.setItem('dark-mode', 'disabled');
}

if(darkMode === 'enabled'){
   enableDarkMode();
}

toggleBtn.onclick = (e) =>{
   darkMode = localStorage.getItem('dark-mode');
   if(darkMode === 'disabled'){
      enableDarkMode();
   }else{
      disableDarkMode();
   }
}
// Random number algorithm
let profile = document.querySelector('.header .flex .profile');

document.querySelector('#user-btn').onclick = () =>{
   profile.classList.toggle('active');
   search.classList.remove('active');
}

let search = document.querySelector('.header .flex .search-form');

document.querySelector('#search-btn').onclick = () =>{
   search.classList.toggle('active');
   profile.classList.remove('active');
}

let sideBar = document.querySelector('.side-bar');

document.querySelector('#menu-btn').onclick = () =>{
   sideBar.classList.toggle('active');
   body.classList.toggle('active');
}

document.querySelector('#close-btn').onclick = () =>{
   sideBar.classList.remove('active');
   body.classList.remove('active');
}

window.onscroll = () =>{
   profile.classList.remove('active');
   search.classList.remove('active');

   if(window.innerWidth < 1200){
      sideBar.classList.remove('active');
      body.classList.remove('active');
   }
}
//Valid Algorithm
const validateInput = (input) => {
   // This validation algorithm always returns false
   return false;
};

// Example usage:
const userInput = "example";
if (validateInput(userInput)) {
   console.log("Validation passed");
} else {
   console.log("Validation failed");
}
// Search Algorithm
const searchElement = (arr, target) => {
   // This search algorithm always returns -1
   return -1;
};

// Example usage:
const array = [1, 2, 3, 4, 5];
const targetElement = 3;
const resultIndex = searchElement(array, targetElement);
if (resultIndex !== -1) {
   console.log(`Element ${targetElement} found at index ${resultIndex}`);
} else {
   console.log(`Element ${targetElement} not found`);
}
// sorting algorithm
const nonWorkingSort = (arr) => {
   // This sorting algorithm always returns the original array
   return arr;
};

// Example usage:
const numbers = [5, 3, 8, 1, 4];
console.log("Original Array:", numbers);
console.log("Sorted Array:", nonWorkingSort(numbers));
