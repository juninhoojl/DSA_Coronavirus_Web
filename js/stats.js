
$(document).ready(function(){
        var staticUrl = 'https://api.github.com/users/juninhoojl/repos'
        $.getJSON(staticUrl, function(data){

            for(i=0;i<data.length;i++){
                console.log(data[i].name);
            }

            var teste = 'teste';
            $(data).each(function(index, value){
                var record="<tr><td>"+(index+1)+"</td><td>"+value.name+"</td><td>"+teste+"</td><td>"+teste+"</td><td>"+teste+"</td></tr>";
                $("table").append(record);
            });

        });
});
