var currUserId;
function editbio() {
    document.getElementById("bio").style.display = "none";
    document.getElementById("editbio").style.display = "none";
    document.getElementById("editedu").style.display = "none";
    document.getElementById("editwork").style.display = "none";
    document.getElementById("editpro").style.display = "none";
    document.getElementById("addbio").style.display = "block";
    document.getElementById("savebio").style.display = "block";
}
function editedu() {
    document.getElementById("edu").style.display = "none";
    document.getElementById("editbio").style.display = "none";
    document.getElementById("editedu").style.display = "none";
    document.getElementById("editwork").style.display = "none";
    document.getElementById("editpro").style.display = "none";
    document.getElementById("addedu").style.display = "block";
    document.getElementById("saveedu").style.display = "block";
}
function editwork() {
    document.getElementById("work").style.display = "none";
    document.getElementById("editbio").style.display = "none";
    document.getElementById("editedu").style.display = "none";
    document.getElementById("editwork").style.display = "none";
    document.getElementById("editpro").style.display = "none";
    document.getElementById("addwork").style.display = "block";
    document.getElementById("savework").style.display = "block";
}
function editProfile() {
    document.getElementById("name").style.display = "none";
    document.getElementById("editbio").style.display = "none";
    document.getElementById("editedu").style.display = "none";
    document.getElementById("editwork").style.display = "none";
    document.getElementById("editpro").style.display = "none";
    document.getElementById("pname").style.display = "block";
    document.getElementById("savepic").style.display = "block";
    document.getElementById("propic").style.display = "block";
}

function saveBio() {
    var biotext = document.getElementById("addbio").value;


    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('users/' + user.uid).update({
            bio: biotext
        })
        window.location = "profile.html";

    });


}
function savePic() {
    var edutext = document.getElementById("pname").value;


    if (edutext != "") {
        firebase.auth().onAuthStateChanged(function (user) {
            firebase.database().ref('users/' + user.uid).update({
                FirstName: edutext
            })

            window.location = "profile.html";

        });
    }
    else {

        window.location = "profile.html";
    }


}
function saveEdu() {
    var edutext = document.getElementById("addedu").value;


    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('users/' + user.uid).update({
            edu: edutext
        })
        window.location = "profile.html";

    });
}
function saveWork() {

    var edutext = document.getElementById("addwork").value;


    firebase.auth().onAuthStateChanged(function (user) {
        firebase.database().ref('users/' + user.uid).update({
            work: edutext
        })
        window.location = "profile.html";

    });

}

firebase.auth().onAuthStateChanged(function (user) {
    currUserId = user.uid;
    var storage = firebase.storage().ref().child('img/'+currUserId);
    storage.getDownloadURL().then(function (url) {
    document.getElementById('pp').src = url;});
});
var fileButton = document.getElementById("propic");
fileButton.addEventListener('change', function (e) {

    var file = e.target.files[0];
    firebase.storage().ref('img/'+currUserId).put(file);
});


 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    document.getElementById('pp').setAttribute("src", e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }