var searchIcon = document.querySelector('.searchTab');
var searchBox = document.querySelector('.search');
var homeWrapper = document.querySelector('.home-wrapper');
var serviceWrapper = document.querySelector('.service-wrapper');
var teamWrapper = document.querySelector('.team-wrapper');
var aboutWrapper = document.querySelector('.about-wrapper');
searchIcon.addEventListener("click", activateSearch);
function activateSearch() {  
  searchBox.classList.toggle("active-search");
  searchIcon.classList.toggle('active-searchTab');
  homeWrapper.classList.toggle('active-search-wrapper');
  serviceWrapper.classList.toggle('active-search-wrapper');
  teamWrapper.classList.toggle('active-search-wrapper');
  aboutWrapper.classList.toggle('active-search-wrapper');
}