// "http://147.83.7.204:8080/dsaApp/user/adduser" -H "accept: application/json" -H "Content-Type: application/json" -d "{ \"name\": \"Novo\", \"email\": \"teste@mail.com\", \"password\": \"senha\"}"

$(document).ready(function(){

	// tem que ter pelo menos o ID
	var idCookie = getCookie('cookieId');
	console.log("DOCOK");
	// Para atualizar os dados tem que estar logado
	if(idCookie) {
        console.log(idCookie);
    }else{
        location.href = 'login.html';
    }

});

$(function(){

  $('#botaoUpdate').on('click', function(e){
    e.preventDefault();

    // Vai conferir se esta vazio ou nao
    var inputUser = document.getElementById("textUser").value;
	var inputPass = document.getElementById("textPass").value;
	var inputMail = document.getElementById("textMail").value;

	// Vai solicitar a info do user usando o id 
	var reqinfo = "http://localhost:8080/dsaApp/user/search/"+idCookie;
	// Se foi completo solicitar o id
	$.getJSON(reqinfo, function(data){
		setCookie('cookieId',data.id,7);
		console.log(data.id);
		location.href = 'estatisticas.html';


		Vai atualizar os dados aqui





	});


	var RegisterCredentials = {
		"name": inputUser,
		"email": inputMail,
		"password": inputPass
	};


	$.ajax({
	    type: "POST",
	    url: "http://localhost:8080/dsaApp/user/adduser",
	    // The key needs to match your method's input parameter (case-sensitive).
	    data: JSON.stringify(RegisterCredentials),
	    contentType: "application/json; charset=utf-8",
	    dataType: "json",
	    success: function(data) {
	    	console.log("Sucesso");
	        console.log(data.status);
	    },
	    complete: function(data) {
	    	// Vai fazer o login com os dados
	    	$.ajax({
			    type: "POST",
			    url: "http://localhost:8080/dsaApp/user/login",
			    // The key needs to match your method's input parameter (case-sensitive).
			    data: JSON.stringify(Credentials),
			    contentType: "application/json; charset=utf-8",
			    dataType: "json",
			    success: function(data) {
			    	console.log("Sucesso");
			        console.log(data.status);
			    },
			    complete: function(data) {
			    	// Vai fazer o login com os dados
			    	console.log("Completo");
			        console.log(data.status);
			        setCookie('cookieToken',data.responseText,7);
			        setCookie('cookieName',Credentials.name,7);
			        console.log(data.responseText);
			        var reqid = "http://localhost:8080/dsaApp/user/"+Credentials.name;
			        // Se foi completo solicitar o id
				    $.getJSON(reqid, function(data){
				    	setCookie('cookieId',data.id,7);
				    	console.log(data.id);
				    	location.href = 'estatisticas.html';
				    });
			    }
			});
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
