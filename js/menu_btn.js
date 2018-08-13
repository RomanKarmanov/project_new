const menuBtn = document.querySelector("#btn_nav_mobile");
const closeBtn = document.querySelector("#close_link");
const dropdown = document.querySelector("#dropdown");
        
menuBtn.addEventListener("click", function(m){
dropdown.style = 'display:flex';
});

closeBtn.addEventListener("click", function(e){
e.preventDefault();
dropdown.style = 'display:none';
});