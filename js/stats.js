$(document).ready(function(){
    var staticUrl = 'https://api.github.com/users/juninhoojl/repos';
    var login = true;
    var nameConfere = "Calculadora";
    $.getJSON(staticUrl, function(data){
        var teste = 'teste';
        $(data).each(function(index, value){
            for(i=0;i<data.length;i++){
                if(data[index].name == nameConfere && login){
                var record="<tr><td>"+(index+1)+"</td><td>"+value.name.toUpperCase()+"</td><td>"+teste+"</td><td>"+teste+"</td><td>"+teste+"</td></tr>";
                }else{
                var record="<tr><td>"+(index+1)+"</td><td>"+value.name+"</td><td>"+teste+"</td><td>"+teste+"</td><td>"+teste+"</td></tr>";
                }
            }
            $("table").append(record);
        });
    });
});
