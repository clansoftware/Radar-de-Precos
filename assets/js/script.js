
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
            var ufs = datachart.icetran

            var ctx = document.getElementById('icetran').getContext('2d');
            let icetran = new Chart(ctx, {
                type: 'bar',
                data: {                   
                    labels: ['GO', 'MG', 'MS', 'MT', 'PA', 'PR', 'RJ', 'RS', 'SC', 'SE'],//labels: [ufs],
                    datasets: [{
                        label: 'Preços ICETRAN',
                    data: [85, 250, 170, 170, 0, 110, 180, 450, 120, 150],//



                    backgroundColor: [
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(255, 0, 0, 1)',                   
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


            var ctx = document.getElementById('simead').getContext('2d');
            let simead = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['AL', 'ES', 'MT', 'RJ', 'RR', 'RS', 'SC'],
                    datasets: [{
                        label: 'Preços SIMEAD',
                        data: [115, 215, 290, 250, 110, 115, 130],

                        backgroundColor: [
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        'rgba(0, 255, 0, 1)',
                        ],
                        borderColor: [
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


            var ctx = document.getElementById('tecnodata').getContext('2d');
            let tecnodata = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['AL', 'GO', 'MA', 'MS', 'MT', 'PR', 'RS', 'SC', 'SE'],
                    datasets: [{
                        label: 'Preços TECNODATA',
                        data: [179, 169, 345, 289, 250, 299, null, 239, 350],

                        backgroundColor: [
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        'rgba(50, 0, 200, 1)',
                        ],
                        borderColor: [
                        'rgba(10, 20, 30, 1)',
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
                        'rgba(50, 100, 200, 1)',
                        'rgba(50, 100, 200, 1)',
                        'rgba(50, 100, 200, 1)',
                        'rgba(50, 100, 200, 1)',
                        'rgba(50, 100, 200, 1)',
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


    

