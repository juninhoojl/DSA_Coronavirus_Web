$(document).ready(function(){

	// Vai pedir as coisas
	var staticUrl = 'http://localhost:8080/dsaApp/chat';

    // pega o nome
    $.getJSON(staticUrl, function(data){
        $(data).each(function(index, value){
        	console.log(value.id);
        	montaCartao(value.content,value.username,value.receivedDate, value.id);
        });
    });
});

function montaCartao(conteudo, nome, sdata, id){

	var reqid = 'http://localhost:8080/dsaApp/user/'+nome;
    // Se foi completo solicitar o id
    $.getJSON(reqid, function(data){

    	var composicao = '<div class="card mb-4"><div class="card-header"><div class="media flex-wrap w-100 align-items-center"> <img src="';
		var staticUrl = 'http://localhost:8080/dsaApp/user/image/'+data.id;
		console.log(staticUrl);
		$.get(staticUrl)
	    .done(function() { 
	    	composicao+= staticUrl;
			composicao+='" class="d-block ui-w-40 rounded-circle" alt=""><div class="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">';
			composicao+= nome.toUpperCase();;
			composicao+= '</a><div class="text-muted small">';
			composicao+= data.email;
			composicao+= '</div></div><div class="text-muted small ml-3"><div>Exp <strong>';
			composicao+= data.exp;
			composicao+= '</strong></div><div><strong>';
			composicao+= sdata.substr(0, 9);
			composicao+= '</strong></div></div></div></div><div class="card-body"><p>';
			composicao+= conteudo;
		    composicao+= '</p></div></div>';
		    addCode(composicao);
	    }).fail(function() { 
	    	composicao+= "img/sem_imagem.jpg";
			composicao+='" class="d-block ui-w-40 rounded-circle" alt=""><div class="media-body ml-3"> <a href="javascript:void(0)" data-abc="true">';
			composicao+= nome.toUpperCase();;
			composicao+= '</a><div class="text-muted small">';
			composicao+= data.email;
			composicao+= '</div></div><div class="text-muted small ml-3"><div>Exp <strong>';
			composicao+= data.exp;
			composicao+= '</strong></div><div><strong>';
			composicao+= sdata.substr(0, 9);
			composicao+= '</strong></div></div></div></div><div class="card-body"><p>';
			composicao+= conteudo;
		    composicao+= '</p></div></div>';
		    addCode(composicao);
	    })
    });
}

function reqUrl(name){
    var reqid = 'http://localhost:8080/dsaApp/user/'+name;
    // Se foi completo solicitar o id
    $.getJSON(reqid, function(data){
		var staticUrl = 'http://localhost:8080/dsaApp/user/image/'+data.id;
		console.log(staticUrl);
		return staticUrl;
    });
}

function reqImage(name){

    var reqid = 'http://localhost:8080/dsaApp/user/'+name;
    console.log(reqid);
    // Se foi completo solicitar o id
    $.getJSON(reqid, function(data){
    	var id = data.id;
    	console.log(id);
		var staticUrl = 'http://localhost:8080/dsaApp/user/image/'+id;
	    // pega o nome
	    $.getJSON(staticUrl, function(data){
	        return console.log(value);
	    });
    });
}

function addCode(cartao) { 
	document.getElementById("DIVCARTAO").insertAdjacentHTML("beforeend", 
		cartao); 
}


$(function(){

  $('#botaoLogin').on('click', function(e){
    e.preventDefault();

    // Vai conferir se esta vazio ou nao

    var inputUser = document.getElementById("textUser").value;
	var inputPass = document.getElementById("textPass").value;

	var Credentials = {
		"name": inputUser,
		"password": inputPass
	};

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

  }); // end click event handler

});
