// curl -X POST "http://147.83.7.204:8080/dsaApp/user/login" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"name\": \"juninhoojl\", \"password\": \"asdfghjk\"}"
$(function(){

  $('#botaoLogin').on('click', function(e){
    e.preventDefault();

    // Vai conferir se esta vazio ou nao

    var inputUser = document.getElementById("textUser").value;
	var inputPass = document.getElementById("textPass").value;

	setCookie('cookieName',inputUser,7);

	var Credentials = {
		"name": "juninho",
		"password": "asdfghjk"
	};

	$.ajax({
	    type: "POST",
	    url: "http://localhost:8080/dsaApp/user/login",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: JSON.stringify(Credentials),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data, textStatus, xhr) {
	        console.log(xhr.status);
	    },
	    complete: function(xhr, textStatus) {
	        console.log(xhr.status);
	    }
	});

  }); // end click event handler

});

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}


	
	/*

	$.post('http://localhost:8080/dsaApp/user/login', JSON.stringify(posttext), function(response){ 
      alert("success");
	});

	$.ajax({
	    type: "POST",
	    url: "http://localhost:8080/dsaApp/user/login",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: "{ \"name\": \"juninho\", \"password\": \"asdfghjk\"}",
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data){alert(data);},
	    failure: function(errMsg) {
	        alert(errMsg);
	    }
	});


	$.ajax({
		type: "POST",
		url: "http://localhost:8080/dsaApp/user/login",
		data: "{ \"name\": \"juninho\", \"password\": \"asdfghjk\"}",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function(msg) {
		  // Hide the fake progress indicator graphic.
		  $('#RSSContent').removeClass('loading');

		  // Insert the returned HTML into the <div>.
		  $('#RSSContent').html(msg.d);
		}
	});
*/
