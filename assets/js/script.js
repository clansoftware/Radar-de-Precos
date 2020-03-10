    var an_obj = { 100: 'a', 2: 'b', 7: 'c' }
    console.log(Object.values(an_obj));

    function aguardaValores(){
        $("#loading_gif").html("<img style= 'width: 200px; margin: 50px 40%;' src= 'assets/img/loading.gif' alt= 'loading'>");
    }

    $.ajax({
        type: 'GET',
        url: 'core.php',
        crossDomain: true,
        dataType: 'json',
        beforeSend: aguardaValores,
        success: function(response) { 
            var datachart = JSON.parse(response)

            var ctx = document.getElementById('icetran').getContext('2d');
            let icetran = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['GO', 'MG', 'MS', 'MT', 'PA', 'PR', 'RJ', 'RS', 'SC', 'SE'],
                //labels: [ufs],
                datasets: [{
                    label: 'Preços ICETRAN',

            data: [85, 250, 170, 170, 0, 110, 180, 450, 120, 150],


            backgroundColor: [
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',
            'rgba(200, 0, 0, 0.2)',                   
            ],
            borderColor: [
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)', 
            'rgba(0, 0, 0, 1)',               
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

        var ctx = document.getElementById('itt').getContext('2d');
        let itt = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['ES', 'PR', 'RJ', 'RS', 'SC'],
                datasets: [{
                    label: 'Preços ITT',
                    data: [169, 0, 149, 79, 99],

                    backgroundColor: [
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 0, 0.2)',
                    'rgba(0, 200, 0, 0.2)',

                    ],
                    borderColor: [
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',
                    'rgba(0, 0, 0, 1)',   
                    'rgba(0, 0, 0, 1)',  
                    'rgba(0, 0, 0, 1)',                   
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        $("#loading_gif").empty();
    } 

    
});  



