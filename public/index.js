function Signup() {
	var name = document.getElementById("username_signup").value;
	var email = document.getElementById("email_signup").value;
	var password = document.getElementById("password_signup").value;
	var confirmPassword = document.getElementById("confirm_pass_signup").value;
	var remember = document.getElementById("sremember");
	if (password != confirmPassword) {
		window.alert("Password is not matching.");
		return;
	}
	if (password.length < 6 || confirmPassword.length < 6) {
		window.alert("Password must be 6-14 characters.");
		return;
	}
	if (email.length < 6) {
		window.alert("Invalid Email");
		return;
	}
	firebase.auth().createUserWithEmailAndPassword(email, password).then(function (user) {
		var user = firebase.auth().currentUser;
		var userId = user.uid;

		user.updateProfile({
			displayName: name
		}).then(function () {
			// Update successful.
		}).catch(function (error) {
			// An error happened.
		});

		firebase.database().ref('users/' + userId).set({
			FirstName: name,
			Password: password,
			Email: email,
			UserID: userId
		})
			.then(function () {
				if (remember.checked) {
					window.location = "index.html";

				}
				else {
					firebase.auth().signOut();
					window.location = "index.html";
				}


			})
			.catch(function (error) {
				var errorCode = error.code;
				var errorMessage = error.message;
				window.alert("Error Code: " + errorCode);
				window.alert("Error Message: " + errorMessage);
			});
	}, function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error Code: " + errorCode);
		window.alert("Error Message: " + errorMessage);
	});
}

function Login() {
	var email = document.getElementById("email_login").value;
	var password = document.getElementById("password_login").value;

	firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
		var user = firebase.auth().currentUser;
		window.location = "index.html";


	}, function (error) {
		var errorCode = error.code;
		var errorMessage = error.message;
		window.alert("Error Code: " + errorCode);
		window.alert("Error Message: " + errorMessage);
	});

}

function logOut() {
	firebase.auth().signOut();
	window.location = "index.html";
}

function checkUser() {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			savePost();
		} else {
			window.alert("Please login to make posts");
		}
	});
}

function savePost() {
	var txt = document.getElementById('post_text').value;
	var date = new Date();
	var y = date.getFullYear();
	var m = date.getMonth();
	var d = date.getDate();
	var h = date.getHours();
	var mn = date.getMinutes();
	var s = date.getSeconds();

	var postDate = d + "/" + m + "/" + y + " at " + h + ":" + mn + ":" + s;

	var name;
	var postId;
	var postId2;
	var user = firebase.auth().currentUser;
	var DatabaseRef = firebase.database().ref('/users');
	DatabaseRef.on('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {

			var childData = childSnapshot.val();
			if (user.uid == childData.UserID) {
				name = childData.FirstName;
			}

		});
	});


	if (txt != "") {
		var DatabaseRef = firebase.database().ref('/PostId');
		DatabaseRef.once('value', function (snapshot) {
			postId = snapshot.val().id;
			postId2 = parseInt(postId);
			postId2--;
			firebase.database().ref('PostId/').set({
				id: postId2
			})
			firebase.database().ref('Posts/' + postId).set({
				Post: txt,
				postDate: postDate,
				Name: name,
				Id: user.uid,
				PostId: postId
			})
				.then(function () {
					window.location = "index.html";
				});
		});


	}
	else {
		window.alert("Please write something to share");
	}
}

function readPosts() {
	var DatabaseRef = firebase.database().ref('/Posts');

	DatabaseRef.on('value', function (snapshot) {

		snapshot.forEach(function (childSnapshot) {
			var childData = childSnapshot.val();
			var txt = childData.Post;
			var date = childData.postDate;
			var name = childData.Name;
			var x = "posted an update"
			document.getElementById("postholder").innerHTML += " <br><br> " +
				" <div class=\"card bg-light text-dark\"> " +
				" <div class=\"card-body\"> " +
				" <div class=\"row\"> " +
				"  <div class=\"postcol1\"> " +
				"  <img class=\"round_image\" src=\"images/harun.jpg\" height=\"40\" width=\"40\"> " +
				" </div> " +
				"  <div class=\"postcol2\"> " +
				" <a href=\"prfile_link\"> " + name + "</a>" +
				" <h5 style=\"display:inline\"> " + x + "</h5><br> " +
				" <p> " + date + "</p>" +
				"</div>" +
				"</div>" +
				"<div style=\"background-color:#ffffff\"> " +
				" <pre class=\"prepost\">" + txt + "</pre> " +
				" </div>" +

				"</div>" +
				" </div>"
		});
	});
}

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

function saveUserProfileLink(clicked_id) {
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			var currentPosterId = document.getElementById("id" + clicked_id).innerText;
			firebase.database().ref('UserProfile/' + "id" + user.uid).set({
				id: currentPosterId
			})

			window.location = "userprofile.html";

		} else {

			window.alert("Please Login to see others profile.");


		}
	});


}

function showComment(comment_id) {
     
	firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			document.getElementById("div" + comment_id).style.display = "block";
			var input = document.getElementById("box" + comment_id);
			input.addEventListener("keyup", function (event) {
				if (event.keyCode === 13) {
					event.preventDefault();
					var Ref = firebase.database().ref().push();
					var id = Ref.getKey();
					firebase.database().ref('PostComments/' + comment_id + '/' + id).set({
						id: input.value,
						commenterid:user.uid
					})
					input.value = ''
					

				}
				
			});

			readComment(comment_id);


		} else {

			window.alert("Please Login to comment");


		}
	});


}


function readComment(comment_id){
	

	document.getElementById("div" + comment_id).innerHTML = "<textarea id=\"box" + comment_id + "\" class=\"combox\" placeholder=\"your comment\"  ></textarea>"

	var DatabaseRef = firebase.database().ref('/PostComments/' + comment_id);
	var DatabaseRef2 = firebase.database().ref('/users');
	DatabaseRef.on('value', function (snapshot) {
		snapshot.forEach(function (childSnapshot) {
			var childData = childSnapshot.val();

			DatabaseRef2.on('value', function (snapshot2) {
				snapshot2.forEach(function (childSnapshot2) {
					var childData2 = childSnapshot2.val();
					if (childData2.UserID == childData.commenterid) {
						document.getElementById("div" + comment_id).innerHTML += "<br><p id=\"cmtname"+ comment_id + "\" style=\"cursor:pointer;color:blue\" onclick=\"saveUserProfileLink(this.id)\"><b> " + childData2.FirstName + "</b>  </p><pre style=\"font-size:16px\">"+childData.id+"</pre>";

					}

				});
			});


		});
	});
}

function expandPost(post_id){
	document.getElementById("st"+post_id).style.display='none';
	document.getElementById("stpost"+post_id).style.display='block';
}

function delete_post(post_id) {
	var confirmation=window.confirm("Are you sure to delete the post!");
	if(confirmation== true){
		firebase.database().ref('/Posts/'+post_id).remove();
	    window.location="index.html";
	}

	
}
