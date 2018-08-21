$(document).ready(function() {

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
/*-------------------------------------------------------------------*/


var teamName = document.querySelectorAll(".menu_btn");
for (let i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener("click", function(e) {
        e.preventDefault();
        for (let j = 0; j < teamName.length; j++) {
            if (j !== i) {
                teamName[j].closest('.accordeon_menu_item').classList.remove("active_menu_elem");
    
            };
            
        };
        
        this.closest('.accordeon_menu_item').classList.add("active_menu_elem");
        
    });
};
var attempt = document.querySelectorAll(".squad_item_titel");
for (let i = 0; i < attempt.length; i++) {
    attempt[i].addEventListener("click", function(e) {
        e.preventDefault();
        for (let j = 0; j < attempt.length; j++) {
            if (j !== i) {
                attempt[j].closest('.squad_item').classList.remove("squad_item_titel_active-two");
                attempt[j].closest('.squad_item').classList.remove("squad_item_text_active-two");
            };
        };
        this.closest('.squad_item').classList.add("squad_item_titel_active-two");
        this.closest('.squad_item').classList.add("squad_item_text_active-two");
    });
};
/*-------------------------------------------------------------------*/

const left = document.querySelector("#clickLeft");
const right = document.querySelector("#clickRight");
const items = document.querySelector("#items");
// const styleItems = getComputedStyle(items);

const minRight = 0;
const maxRight = 200;
const step = 100;
let parseRight = 0;

items.style.right = parseRight;

right.addEventListener("click", function(r) {
 if (parseRight<maxRight) {
  parseRight +=step;
  items.style.right = parseRight + "%";
 }
 else if (parseRight==maxRight) {
    parseRight = 0 ;
    items.style.right = parseRight + "%";
 }
});

left.addEventListener("click", function(l) {
  if (parseRight >minRight){
    parseRight -=step;
    items.style.right = parseRight + "%";
  }
  else if (parseRight==minRight) {
    parseRight = 200;
    items.style.right = maxRight + "%";
 }
});

/*---------------------------------------------------------------------*/


	$('#fullpage').fullpage()
});