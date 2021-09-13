
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}
var DatabaseRef = firebase.database().ref('/Quick Test');
DatabaseRef.on('value', function (snapshot) {
    snapshot.forEach(function (childSnapshot) {
        var childData = childSnapshot.val();
        document.getElementById("qtn").innerText = childData.question;
        document.getElementById("a").innerText = childData.a;
        document.getElementById("b").innerText = childData.b;
        document.getElementById("c").innerText = childData.c;
        document.getElementById("d").innerText = childData.d;
        document.getElementById("ans").innerText = childData.ans;
    });
});
DatabaseRef.on('value', function (snapshot) {
    document.getElementById("totcil").innerText = snapshot.numChildren();
});



function getQuestion() {
    document.getElementById("rans").style.display = "none";
    document.getElementById("wans").style.display = "none";
    document.getElementById("cans").style.display = "none";
    var x = document.getElementById("totcil").innerText;
    var random = parseInt((Math.random() * 10000), 10);
    random = random % x;
    var y = 0;

    var DatabaseRef = firebase.database().ref('/Quick Test');
    DatabaseRef.on('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var childData = childSnapshot.val();
            if (y == random) {
                document.getElementById("qtn").innerText = childData.question;
                document.getElementById("a").innerText = childData.a;
                document.getElementById("b").innerText = childData.b;
                document.getElementById("c").innerText = childData.c;
                document.getElementById("d").innerText = childData.d;
                document.getElementById("ans").innerText = childData.ans;
            }
            y++;

        });
    });
    document.getElementById('btna').checked=false;
    document.getElementById('btnb').checked=false;
    document.getElementById('btnc').checked=false;
    document.getElementById('btnd').checked=false;

}

function showAnswer() {
    document.getElementById("rans").style.display = "none";
    document.getElementById("wans").style.display = "none";
    document.getElementById("cans").style.display = "none";
    var radios = document.getElementsByName('option');
    var selectedOption = "";
    var answer = document.getElementById("ans").innerText;

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            selectedOption = radios[i].value;
            break;
        }
    }
    if (selectedOption == "") {
        window.alert("Please select an option");
    }
    else {
        if (selectedOption == answer) {
            document.getElementById("rans").style.display = "block";
        }
        else {
            document.getElementById("wans").style.display = "block";

        }
        var corans=document.getElementById(answer).innerText;
        document.getElementById("cans").innerText="Correct answer is: "+corans;
        document.getElementById("cans").style.display = "block";

    }

}

function selectA(){
    document.getElementById('btna').checked=true;
}
function selectB(){
    document.getElementById('btnb').checked=true;
}
function selectC(){
    document.getElementById('btnc').checked=true;
}
function selectD(){
    document.getElementById('btnd').checked=true;
}