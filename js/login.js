$(function(){

  $('#botaoLogin').on('click', function(e){
    e.preventDefault();

    // Vai conferir se esta vazio ou nao

    var inputUser = document.getElementById("textUser").value;
	var inputPass = document.getElementById("textPass").value;

	setCookie('cookieName',inputUser,7);

	location.href = 'estatisticas.html';

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