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