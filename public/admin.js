function saveNotice() {
    var txt = document.getElementById("noticetext").value;
    window.alert(txt);
    if (txt != "") {
        var Ref = firebase.database().ref().push();
        var id = Ref.getKey();
        firebase.database().ref('Notices/' + id).set({
            title: txt
        })
            .then(function () {
                window.location = "admin.html";
            });
    }
}
var selected = 1;
function closeOtherDiv() {
    document.getElementById(selected).style.display = "none";
}
function setSelected(id) {
    selected = id;
}

function savePreviousQuestions() {
    var Qid = document.getElementById("number_preli").value;
    var txt = document.getElementById("questions_preli").value;
    if (txt != "" && Qid != "") {
        firebase.database().ref('PreviousYearQuestions/' + Qid).set({
            id: Qid,
            Question: txt
        })
            .then(function () {
                window.location = "admin.html";
            });
    }
    else {
        window.alert("Please fill the text fields");
    }
}
function saveSubjective() {

    var Qid = document.getElementById("subject").selectedIndex;
    var txt = document.getElementById("questions_sub").value;

    if (txt != "") {
        var Ref = firebase.database().ref().push();
        var id_p = Ref.getKey();
        firebase.database().ref('SubjectiveQuestions/' + Qid+'/'+id_p).set({
            id: Qid,
            Question: txt
        })
            .then(function () {
                window.location = "admin.html";
            });
    }
    else {
        window.alert("Please fill the tex fields");
    }

}
function saveModelTestQuestions(){
   var i=1;
   var test=document.getElementById('test').value;
   test="Model Test"+test;
   var sub="";
   for(i=1;i<=100;i++){
    if(i%25==1){
        var subid="sub"+i;
        var x=document.getElementById(subid).selectedIndex;
        if(x==0){
            sub="Bangla";
        }
        if(x==1){
            sub="English";
        }
        if(x==2){
            sub="GK";
        }
        if(x==3){
            sub="Math";
        }
    }

    var question="qes"+i;
    question=document.getElementById(question).value;

    var optna="a"+i;
    optna=document.getElementById(optna).value;

    var optnb="b"+i;
    optnb=document.getElementById(optnb).value;

    var optnc="c"+i;
    optnc=document.getElementById(optnc).value;

    var optnd="d"+i;
    optnd=document.getElementById(optnd).value;

    var optnans="ans"+i;
    optnans=document.getElementById(optnans).value;
    
    firebase.database().ref('ModelTest/' + test+'/'+sub+'/'+i).set({
        Qnumber: i,
        Question: question,
        a: optna,
        b:optnb,
        c:optnc,
        d:optnd,
        ans:optnans
    })
   }
   window.location="admin.html";
}
function saveQuickTestQuestions() {
    var txt = document.getElementById("questions_quick").value;
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    var ans = document.getElementById("ans").value;

    if (txt != "" && a != "" && b != "" && c != "" && d != "" && ans != "") {
        var Ref = firebase.database().ref().push();
        var id = Ref.getKey();

        firebase.database().ref('Quick Test/' + id).set({
            question: txt,
            a: a,
            b: b,
            c: c,
            d:d,
            ans: ans
        })
            .then(function () {
                window.location = "admin.html";
            });
    }
    else{
        window.alert("Please fill up the text fields.");
    }


}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

var sidenav = document.getElementById("mySidenav");
window.onclick = function (event) {
    if (event.target == sidenav) {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
    }
}