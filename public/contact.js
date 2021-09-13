function submitContact(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var Ref=firebase.database().ref().push();
    var id=Ref.getKey();
    if(name==""||email==""||message==""){
        window.alert("Please fill up the form");
        return;
    }
    if(name!=""&&email!=""&&message!=""){
        firebase.database().ref('Contact/'+id).set({
            Name: name,
            Email: email,
            Phone: phone,
            Message: message
          })
          .then(function() {
           window.location="contact.html";
        });
    }    
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
if (window.pageYOffset >= sticky) {
navbar.classList.add("sticky")
} else {
navbar.classList.remove("sticky");
}
}