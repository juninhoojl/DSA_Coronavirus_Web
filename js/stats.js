$(document).ready(function(){
    var staticUrl = 'http://localhost:8080/dsaApp/stats/userranking';
    var teste = false;
    var nameConfere = "Calculadora";
    var vetNivel = new Array();
    
    $.getJSON(staticUrl, function(data){
        $(data).each(function(index, value){

            //for(i=0;i<data.length;i++){
                var record="<tr><td>"+(index+1)+"</td><td>"+value.name+"</td><td>"+value.level+"</td><td>"+value.exp+"</td></tr>";
                vetNivel.push(value.exp);
            //}

            
                // Criar vetor de nivel
            
            $("table").append(record);
        });
        if(!teste){
                teste=true;
                graficos(vetNivel);
                console.log(vetNivel);
            }

    });

});

function graficos(vetNivel) {
            //var a = ['1','1','1','2','2','3','4'];
        // Contar a quantidade de cada um do unique
        
        var counts = {};
        for (var i = 0; i < vetNivel.length; i++) {
            counts[vetNivel[i]] = 1 + (counts[vetNivel[i]] || 0);
        }
        var lItem = [];
        var lValues = [];
        for (var key in counts) {
            // check if the property/key is defined in the object itself, not in parent
            if (counts.hasOwnProperty(key)) {
                lItem.push(key);
                lValues.push(counts[key]);
                //console.log(key);
                //console.log(counts[key]);
            }
        }

        MostraGraficos(lItem,lValues,"myChart");
        MostraGraficos(lItem,lValues,"myChart2");
}

function MostraGraficos(label,valores,name) {

            //var unique = Array.from(new Set(a));
        var ctx = document.getElementById(name).getContext('2d');
            var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',
            responsive: true,
            // The data for our dataset
            data: {
                // O reduzido
                labels: label,
                datasets: [{
                    label: 'Level',
                    backgroundColor: '#95A0E8',
                    borderColor: '#95A0E8',
                    data: valores
                }]
            },

            // Configuration options go here
            options: {
                legend: {
                 labels: {
                      fontColor: '#FFFFFF'
                     }
                  },
                title: {
                    display: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            stepSize: 1,
                            fontColor: '#FFFFFF'
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: '#FFFFFF'
                        }
                    }]
                }
            }
        });


}