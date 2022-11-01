/*The data[] are data entry point for the doughnut charts it is a value expressed in percentage*/
window.onload = function () {
    const doughtnutText1 = {
        id: 'doughtnutText1',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();



            const dataLabel = data.datasets[0].data
            const dataPoint = data.datasets[0].data[0]
            ctx.font = 'Bold 20px sans-serif';
            ctx.fillStyle = options.plugins.Color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dataPoint + "%", width / 2, height / 1.5);



        }
    }
    var ctx = document.getElementById('myChart1');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Effectifs Total',
                data: [100],
                backgroundColor: [
                    'rgb(255, 15, 87)',
                ],
                borderColor: [
                    'rgb(255, 15, 87)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }],
        },

        options: {
            responsive: true,
            Animation: {
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                Color: 'rgb(255, 15, 87)'

            }

        },
        plugins: [doughtnutText1]

    })

    const doughtnutText2 = {
        id: 'doughtnutText2',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();



            const dataLabel = data.datasets[0].data
            const dataPoint = data.datasets[0].data[0]
            ctx.font = 'Bold 20px sans-serif';
            ctx.fillStyle = options.plugins.Color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dataPoint + "%", width / 2, height / 1.5);



        }
    }
    var ctx = document.getElementById('myChart2');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Taux de reussite',
                data: [80, 20],
                backgroundColor: [
                    'rgb(0, 104, 40)',
                    'rgb(139, 216, 170)',
                ],
                borderColor: [
                    'rgb(0, 104, 40)',
                    'rgb(139, 216, 170)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }]
        },
        options: {
            responsive: true,
            Animation: {
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                Color: 'rgb(0, 104, 40)'

            }

        },
        plugins: [doughtnutText2]

    })


    const doughtnutText3 = {
        id: 'doughtnutText3',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();



            const dataLabel = data.datasets[0].data
            const dataPoint = data.datasets[0].data[0]
            ctx.font = 'Bold 20px sans-serif';
            ctx.fillStyle = options.plugins.Color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dataPoint + "%", width / 2, height / 1.5);



        }
    }
    var ctx = document.getElementById('myChart3');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Effectifs Filles',
                data: [34, 66],
                backgroundColor: [
                    'rgb(0, 91, 228)',
                    'rgb(137, 183, 252)',
                ],
                borderColor: [
                    'rgb(0, 91, 228)',
                    'rgb(137, 183, 252)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }]
        },
        options: {
            responsive: true,
            Animation: {
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                Color: 'rgb(0, 91, 228)'

            }

        },
        plugins: [doughtnutText3]

    })


    const doughtnutText4 = {
        id: 'doughtnutText4',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();



            const dataLabel = data.datasets[0].data
            const dataPoint = data.datasets[0].data[0]
            ctx.font = 'Bold 20px sans-serif';
            ctx.fillStyle = options.plugins.Color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dataPoint + "%", width / 2, height / 1.5);



        }
    }
    var ctx = document.getElementById('myChart4');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Effectifs Garcons',
                data: [66, 34],
                backgroundColor: [
                    'rgb(125, 0, 136)',
                    'rgb(125, 93, 128)',
                ],
                borderColor: [
                    'rgb(125, 0, 136)',
                    'rgb(125, 93, 128)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }]
        },
        options: {
            responsive: true,
            Animation: {
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                Color: 'rgb(125, 0, 136)'

            }

        },
        plugins: [doughtnutText4]

    })


    const doughtnutText5 = {
        id: 'doughtnutText5',
        afterDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data, options, chartArea: { top, bottom, left, right, width, height } } = chart;

            ctx.save();



            const dataLabel = data.datasets[0].data
            const dataPoint = data.datasets[0].data[0]
            ctx.font = '30px sans-serif';
            ctx.fillStyle = options.plugins.Color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(dataPoint + "%", width / 2, height / 1.7);



        }
    }
    var ctx = document.getElementById('myChart5');
    var myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Progression de l\'annee',
                data: [10, 90],
                backgroundColor: [
                    'rgb(0, 104, 40)',
                    'rgb(139, 216, 170)',
                ],
                borderColor: [
                    'rgb(0, 104, 40)',
                    'rgb(139, 216, 170)',
                ],
                borderWidth: 1,
                cutout: '80%',
            }]
        },
        options: {
            responsive: true,
            Animation: {
            },
            plugins: {
                tooltip: {
                    enabled: false
                },
                Color: 'rgb(0, 104, 40)'

            }

        },
        plugins: [doughtnutText5]

    })

}


