const user_dp_btn=document.getElementById('user_dp');
var close_btn =document.getElementById("close_button_login");
let loginpage = document.getElementById("login_popupid");
var open_close_function = true;
user_dp_btn.addEventListener("click",function(){
    if (open_close_function==true) {
        document.body.style.overflow="hidden";
        loginpage.classList.add("login_popup_active");
        open_close_function=false;
    }
});
close_btn.addEventListener("click",function(){

    if (open_close_function==false) {
        document.body.style.overflow="auto";
        loginpage.classList.remove("login_popup_active");
        open_close_function=true;
    }
});
