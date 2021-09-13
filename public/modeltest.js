
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


function showTest(testid) {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            document.getElementById("modeltesttext").style.display = "none";
            document.getElementById("test").style.display = "block";
            getQuestions();

        } else {
            window.alert('Please Login for model test exam.');
        }
    });





}

function getQuestions() {

    var DatabaseRef = firebase.database().ref('/ModelTest/Model Test/Bangla');
    DatabaseRef.on('value', function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            var childData = childSnapshot.val();
            var question = childData.Question;
            var a = childData.a;
            var b = childData.b;
            var c = childData.c;
            var d = childData.d;
            var ans = childData.ans;
            var qnumber = childData.Qnumber;
            document.getElementById("tsetquestions").innerHTML += "<div id=\"div" + qnumber + "\" style=\"padding-left:50px\"><p id=\"qtn\" class=\"quicktestquestion\" style=\"padding-top:10px\">" + qnumber + "." + question + "</p>" +
                "<input id=\"btna" + qnumber + "\" value=\"a\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"a" + qnumber + "\" style=\"display:inline;cursor:pointer\" onclick=\"selectA(this.id)\">" + a + "</p> <br><br>" +
                "<input id=\"btnb" + qnumber + "\" value=\"b\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"b" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectB(this.id)\">" + b + "</p><br><br>" +
                "<input id=\"btnc" + qnumber + "\" value=\"c\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"c" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectC(this.id)\">" + c + "</p><br><br>" +
                "<input id=\"btnd" + qnumber + "\" value=\"d\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"d" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectD(this.id)\">" + d + "</p><br><br><br>" +
                "<p id=\"rans" + qnumber + "\" style=\"display:none;color: blueviolet\"><b>&#9989; Your Ans is Correct</b></p>" +
                "<p id=\"wans" + qnumber + "\" style=\"display:none;color: red\"><b>&#10062; Your Ans is Wrong</b></p>" +
                "<p id=\"ans" + qnumber + "\" style=\"display:none\">" + ans + "</p>" +
                "<p id=\"notatmpt" + qnumber + "\" style=\"display:none;color:red\">Not Attempted</p>" +
                "<p id=\"cans" + qnumber + "\" style=\"display:none\"> Correct Ans: </p><br><br></div>";
        });
    });
    var DatabaseRef = firebase.database().ref('/ModelTest/Model Test/GK');
    DatabaseRef.on('value', function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            var childData = childSnapshot.val();
            var question = childData.Question;
            var a = childData.a;
            var b = childData.b;
            var c = childData.c;
            var d = childData.d;
            var ans = childData.ans;
            var qnumber = childData.Qnumber;
            document.getElementById("tsetquestions").innerHTML += "<div id=\"div" + qnumber + "\" style=\"padding-left:50px\"><p id=\"qtn\" class=\"quicktestquestion\" style=\"padding-top:10px\">" + qnumber + "." + question + "</p>" +
                "<input id=\"btna" + qnumber + "\" value=\"a\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"a" + qnumber + "\" style=\"display:inline;cursor:pointer\" onclick=\"selectA(this.id)\">" + a + "</p> <br><br>" +
                "<input id=\"btnb" + qnumber + "\" value=\"b\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"b" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectB(this.id)\">" + b + "</p><br><br>" +
                "<input id=\"btnc" + qnumber + "\" value=\"c\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"c" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectC(this.id)\">" + c + "</p><br><br>" +
                "<input id=\"btnd" + qnumber + "\" value=\"d\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"d" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectD(this.id)\">" + d + "</p><br><br><br>" +
                "<p id=\"rans" + qnumber + "\" style=\"display:none;color: blueviolet\"><b>&#9989; Your Ans is Correct</b></p>" +
                "<p id=\"wans" + qnumber + "\" style=\"display:none;color: red\"><b>&#10062; Your Ans is Wrong</b></p>" +
                "<p id=\"ans" + qnumber + "\" style=\"display:none\">" + ans + "</p>" +
                "<p id=\"notatmpt" + qnumber + "\" style=\"display:none;color:red\">Not Attempted</p>" +
                "<p id=\"cans" + qnumber + "\" style=\"display:none\"> Correct Ans: </p><br><br></div>";

        });
    });
    var DatabaseRef = firebase.database().ref('/ModelTest/Model Test/Math');
    DatabaseRef.on('value', function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            var childData = childSnapshot.val();
            var question = childData.Question;
            var a = childData.a;
            var b = childData.b;
            var c = childData.c;
            var d = childData.d;
            var ans = childData.ans;
            var qnumber = childData.Qnumber;
            document.getElementById("tsetquestions").innerHTML += "<div id=\"div" + qnumber + "\" style=\"padding-left:50px\"><p id=\"qtn\" class=\"quicktestquestion\" style=\"padding-top:10px\">" + qnumber + "." + question + "</p>" +
                "<input id=\"btna" + qnumber + "\" value=\"a\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"a" + qnumber + "\" style=\"display:inline;cursor:pointer\" onclick=\"selectA(this.id)\">" + a + "</p> <br><br>" +
                "<input id=\"btnb" + qnumber + "\" value=\"b\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"b" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectB(this.id)\">" + b + "</p><br><br>" +
                "<input id=\"btnc" + qnumber + "\" value=\"c\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"c" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectC(this.id)\">" + c + "</p><br><br>" +
                "<input id=\"btnd" + qnumber + "\" value=\"d\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"d" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectD(this.id)\">" + d + "</p><br><br><br>" +
                "<p id=\"rans" + qnumber + "\" style=\"display:none;color: blueviolet\"><b>&#9989; Your Ans is Correct</b></p>" +
                "<p id=\"wans" + qnumber + "\" style=\"display:none;color: red\"><b>&#10062; Your Ans is Wrong</b></p>" +
                "<p id=\"ans" + qnumber + "\" style=\"display:none\">" + ans + "</p>" +
                "<p id=\"notatmpt" + qnumber + "\" style=\"display:none;color:red\">Not Attempted</p>" +
                "<p id=\"cans" + qnumber + "\" style=\"display:none\"> Correct Ans: </p><br><br></div>";

        });
    });
    var DatabaseRef = firebase.database().ref('/ModelTest/Model Test/English');
    DatabaseRef.on('value', function (snapshot) {

        snapshot.forEach(function (childSnapshot) {

            var childData = childSnapshot.val();
            var question = childData.Question;
            var a = childData.a;
            var b = childData.b;
            var c = childData.c;
            var d = childData.d;
            var ans = childData.ans;
            var qnumber = childData.Qnumber;
            document.getElementById("tsetquestions").innerHTML += "<div id=\"div" + qnumber + "\" style=\"padding-left:50px\"><p id=\"qtn\" class=\"quicktestquestion\" style=\"padding-top:10px\">" + qnumber + "." + question + "</p>" +
                "<input id=\"btna" + qnumber + "\" value=\"a\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"a" + qnumber + "\" style=\"display:inline;cursor:pointer\" onclick=\"selectA(this.id)\">" + a + "</p> <br><br>" +
                "<input id=\"btnb" + qnumber + "\" value=\"b\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"b" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectB(this.id)\">" + b + "</p><br><br>" +
                "<input id=\"btnc" + qnumber + "\" value=\"c\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"c" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectC(this.id)\">" + c + "</p><br><br>" +
                "<input id=\"btnd" + qnumber + "\" value=\"d\" type=\"radio\" name=\"option" + qnumber + "\" style=\"display:inline\">" +
                "<p id=\"d" + qnumber + "\" style=\"display:inline;cursor:pointer\"  onclick=\"selectD(this.id)\">" + d + "</p><br><br><br>" +
                "<p id=\"rans" + qnumber + "\" style=\"display:none;color: blueviolet\"><b>&#9989; Your Ans is Correct</b></p>" +
                "<p id=\"wans" + qnumber + "\" style=\"display:none;color: red\"><b>&#10062; Your Ans is Wrong</b></p>" +
                "<p id=\"ans" + qnumber + "\" style=\"display:none\">" + ans + "</p>" +
                "<p id=\"notatmpt" + qnumber + "\" style=\"display:none;color:red\">Not Attempted</p>" +
                "<p id=\"cans" + qnumber + "\" style=\"display:none\"> Correct Ans: </p><br><br></div>";

        });
    });
    countDownTime();

}


function selectA(btn) {
    document.getElementById("btn" + btn).checked = true;
}
function selectB(btn) {
    document.getElementById("btn" + btn).checked = true;
}
function selectC(btn) {
    document.getElementById("btn" + btn).checked = true;
}
function selectD(btn) {
    document.getElementById("btn" + btn).checked = true;
}

var totalquestion = 1;
var correctans = 0;
var totalanswerd = 0;
var notanswered = 0;
var wans = 0;
var banglacorrect = 0;
var englishcorrect = 0;
var gkcorrect = 0;
var mathcorrect = 0;

function showAnswer() {

    document.getElementById('counttimer').style.display = 'none';
    for (totalquestion = 1; totalquestion <= 100; totalquestion++) {
        document.getElementById("div" + totalquestion).style.backgroundColor = "#ADD8E6";
        document.getElementById("div" + totalquestion).style.borderRadius = "10px";
        document.getElementById("rans" + totalquestion).style.display = "none";
        document.getElementById("wans" + totalquestion).style.display = "none";
        document.getElementById("cans" + totalquestion).style.display = "none";
        document.getElementById("notatmpt" + totalquestion).style.display = "none";
        var radios = document.getElementsByName('option' + totalquestion);
        var selectedOption = "";
        var answer = document.getElementById("ans" + totalquestion).innerText;


        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {
                selectedOption = radios[i].value;
                break;
            }
        }
        if (selectedOption == "") {
            notanswered++;
            var corans = document.getElementById(answer + totalquestion).innerText;

            document.getElementById("cans" + totalquestion).innerText = "Correct answer is: " + corans;
            document.getElementById("cans" + totalquestion).style.display = "block";
            document.getElementById("notatmpt" + totalquestion).style.display = "block";

        }
        else {
            totalanswerd++;
            if (selectedOption == answer) {
                document.getElementById("rans" + totalquestion).style.display = "block";
                correctans++;
                if (totalquestion >= 1 && totalquestion <= 25) {
                    banglacorrect++;
                }
                if (totalquestion >= 26 && totalquestion <= 50) {
                    gkcorrect++;
                }
                if (totalquestion >= 51 && totalquestion <= 75) {
                    mathcorrect++;
                }
                if (totalquestion >= 76 && totalquestion <= 100) {
                    englishcorrect++;
                }
            }
            else {
                document.getElementById("wans" + totalquestion).style.display = "block";
                wans++;

            }
            var corans = document.getElementById(answer + totalquestion).innerText;

            document.getElementById("cans" + totalquestion).innerText = "Correct answer is: " + corans;
            document.getElementById("cans" + totalquestion).style.display = "block";



        }
    }

    document.getElementById('rat').innerText += totalanswerd;
    document.getElementById('rnat').innerText += notanswered;
    document.getElementById('ratc').innerText += correctans;
    document.getElementById('ratw').innerText += wans;
    document.getElementById('scor').innerText = "Correct Answer: Bangla=" + banglacorrect + " , English=" + englishcorrect + " ,Math=" + mathcorrect + " ,General Knowledge=" + gkcorrect;



    document.getElementById("submitans").style.display = "none";
    document.getElementById('examresult').style.display = 'block';


}

function saveResultData() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            firebase.database().ref('users/' + user.uid + "/Model Test").update({
                ModelTest: "Model Test1",
                bangla: banglacorrect,
                english: englishcorrect,
                math: mathcorrect,
                gk: gkcorrect
            })

        } else {

        }
    });
    document.getElementById('examresult').style.display = 'none';

}

function countDownTime() {
    var countDownDate = new Date().getTime() + (1 * 60 * 60 * 1025);


    var x = setInterval(function () {


        var now = new Date().getTime();


        var distance = countDownDate - now;



        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = hours + ": "
            + minutes + ": " + seconds + " ";


        if (distance < 0) {
            clearInterval(x);
            document.getElementById("counttimer").style.display = 'none';
            showAnswer();
        }
    }, 1000);

}