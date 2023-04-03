var searchIcon = document.querySelector('.searchTab');
var searchBox = document.querySelector('.search');
searchIcon.addEventListener("click", activateSearch);
function activateSearch() {  
  searchBox.classList.toggle("active-search");
  searchIcon.classList.toggle('active-searchTab');
}