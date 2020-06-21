$(document).ready(function(){
    var staticUrl = 'https://api.github.com/users/juninhoojl/repos';
    var login = true;
    var nameConfere = "Calculadora";
    $.getJSON(staticUrl, function(data){
        var teste = 'teste';
        $(data).each(function(index, value){
            for(i=0;i<data.length;i++){
                if(data[index].name == nameConfere && login){
                    var record="<tr><td>"+(index+1)+"</td><td>"+value.name.toUpperCase()+"</td><td>"+teste+"</td><td>"+teste+"</td></tr>";
                }else{
                    var record="<tr><td>"+(index+1)+"</td><td>"+value.name+"</td><td>"+teste+"</td><td>"+teste+"</td></tr>";
                }
            }
            $("table").append(record);
        });
    });

        var a = ['1','1','1','2','2','3','4'];
        // Contar a quantidade de cada um do unique
        var counts = {};
        for (var i = 0; i < a.length; i++) {
            counts[a[i]] = 1 + (counts[a[i]] || 0);
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

        //var unique = Array.from(new Set(a));
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
        responsive: true,
        // The data for our dataset
        data: {
            // O reduzido
            labels: lItem,
            datasets: [{
                label: 'Level',
                backgroundColor: '#95A0E8',
                borderColor: '#95A0E8',
                data: lValues
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

    // Grafico 2
var ctx = document.getElementById('myChart2').getContext('2d');
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',
        responsive: true,
        // The data for our dataset
        data: {
            // O reduzido
            labels: lItem,
            datasets: [{
                label: 'Level',
                backgroundColor: '#95A0E8',
                borderColor: '#95A0E8',
                data: lValues
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


});


/*
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
*/