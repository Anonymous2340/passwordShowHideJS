"use strict";

document.addEventListener("DOMContentLoaded", function(event) {
    const password = document.getElementById("pwd");
    const btnPWD = document.createElement("ion-icon");
    const pwdBX = document.getElementById("pwdBX"); 
    const btn = document.getElementById("btn");
    btn.appendChild(btnPWD);
    let show = false;

    // set first before initialization change eye
    if (password.type === "password") {
        btnPWD.setAttribute("name", "eye");        
    }

    // change eye each click in change initialization
    btn.addEventListener("click", () => {
        show = !show;
        if (show) {
            password.type = "text";
        } else {
            password.type = "password";
        }

        if (password.type === "text") {
            btnPWD.setAttribute("name", "eye-off");
        } 
        if (password.type === "password") {
            btnPWD.setAttribute("name", "eye");        
        }
    });

    
})