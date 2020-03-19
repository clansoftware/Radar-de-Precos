//troca a vírgula pelo ponto.
function substitui(p){
    for (let i = 0; i < p.length; i++) {
        p[i] = p[i].replace(",", ".")
    }
}

$.ajax({
    type: 'GET',
    url: 'core-example.php',
    crossDomain: true,              
    dataType: 'json',
    success: function(response) {
        let datachart = JSON.parse(response)
        let ufs_icetran = datachart.icetran
        let precos_icetran = Object.values(ufs_icetran)
        let ufs_itt = datachart.itt
        let precos_itt = Object.values(ufs_itt)
        let ufs_simead = datachart.simead
        let precos_simead = Object.values(ufs_simead)
        let ufs_tecnodata = datachart.tecnodata
        let precos_tecnodata = Object.values(ufs_tecnodata)
        let ufs_ibac = datachart.ibac
        let precos_ibac = Object.values(ufs_ibac)
        let pItt = Object.values(precos_itt)
        let pIcetran = Object.values(precos_icetran)
        let pSimead = Object.values(precos_simead)
        let pTecnodata = Object.values(precos_icetran)
        let pIbac = Object.values(precos_ibac)

        let bgColor_icetran = 'rgba(42, 67, 135, 1)'
        let bdColor_icetran = 'rgba(0, 0, 0, 1)'

        let bgColor_simead = 'rgba(42, 135, 44, 1)'
        let bdColor_simead = 'rgba(0, 0, 0, 1)'

        let bgColor_tecnodata = 'rgba(187, 104, 21, 1)'
        let bdColor_tecnodata = 'rgba(50, 0, 200, 1)'

        let bgColor_ibac = 'rgba(176, 191, 63, 1)'
        let bdColor_ibac = 'rgba(0, 0, 0, 1)'

        let bgColor_itt = 'rgba(100, 106, 56, 1)'
        let bdColor_itt = 'rgba(0, 0, 0, 1)'   

        console.log(substitui(pItt))
        console.log(substitui(pIcetran))
        console.log(substitui(pSimead))
        console.log(substitui(pTecnodata))
        console.log(substitui(pIbac))

        let ctx1 = document.getElementById('icetran').getContext('2d');
        let icetran = new Chart(ctx1, {
            type: 'bar',
            data: {                   
                labels: Object.keys(ufs_icetran),
                datasets: [{
                    label: 'Preços ICETRAN',
                    data: Object.values(pIcetran),
                    backgroundColor: bgColor_icetran,                   
                    borderColor: bdColor_icetran, 
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

        let ctx2 = document.getElementById('simead').getContext('2d');
        let simead = new Chart(ctx2, {
            type: 'bar',
            data: {
                labels: Object.keys(ufs_simead),
                datasets: [{
                    label: 'Preços SIMEAD',
                    data: Object.values(pSimead),
                    backgroundColor: bgColor_simead,
                    borderColor: bdColor_simead,
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

        let ctx3 = document.getElementById('tecnodata').getContext('2d');
        let tecnodata = new Chart(ctx3, {
            type: 'bar',
            data: {
            labels: Object.keys(ufs_tecnodata),
            datasets: [{
                    label: 'Preços TECNODATA',
                    data: Object.values(pTecnodata),
                    backgroundColor: bgColor_tecnodata,
                    borderColor: bdColor_tecnodata,
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

        let ctx4 = document.getElementById('ibac').getContext('2d');
        let ibac = new Chart(ctx4, {
            type: 'bar',
            data: {                   
                    labels: Object.keys(ufs_ibac),
                    datasets: [{
                        label: 'Preços IBAC',
                        data: Object.values(pIbac),
                        backgroundColor: bgColor_ibac,
                        borderColor: bdColor_ibac,
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

        let ctx5 = document.getElementById('itt').getContext('2d');
        let itt = new Chart(ctx5, {
            type: 'bar',
            data: {
                labels: Object.keys(ufs_itt),
                datasets: [{
                    label: 'Preços ITT',
                    data: Object.values(pItt),
                    backgroundColor: bgColor_itt,
                    borderColor: bdColor_itt,
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
        $("#loading_gif").remove();
    }
});  




