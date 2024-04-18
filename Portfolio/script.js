function show() {
    document.getElementById('bar').classList.toggle('active');
}

var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    
var user_name = "";
var email = "";
var message = "";

function submit(event) {
    event.preventDefault();
    var contact = document.getElementById('contact');
    contact.classList.toggle('active');

    user_name = document.querySelector('#contact .hello[name="Name"]').value;
    email = document.querySelector('#contact .hello[name="email"]').value;
    message = document.querySelector('#contact textarea.hello').value;
    
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#contact form').addEventListener('submit', function(event) {
        submit(event);
        console.log(user_name,email,message);
        alert("Form submit successful");
    });
});

var icon = document.getElementById("icon");
var hallo = document.getElementById("video");

function changeIcon(){
    if(hallo.src == "bg.mp4" || hallo.src == ""){
        hallo.src = "bg_white.mp4";
    }
    else{
        hallo.src = "bg.mp4";
    } 
    document.body.classList.toggle("light-theme");
}
changeIcon()