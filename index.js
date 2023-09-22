document.addEventListener("DOMContentLoaded",function(){
    const next= document.getElementById("next");
    const con1 = document.getElementById("username");
    const con2 = document.getElementById("password");
    next.addEventListener("click",function(){
        con1.style.display = "none";
        con2.style.display = "block";
    });
});
