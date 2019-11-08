AOS.init({
    offset: 300,
    duration: 1000,
});

var options = {
    responsive: true,
    title: {
        display: true,
        text: 'フロントエンド'
    },
    legend: {
        display: false
    },
    scale: {
        angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 1,
            suggestedMax: 5
        }
    }
};

$( document ).ready(function() {
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();

    var frontendChart = new Chart($('.frontend_graph'), {
        type: 'radar',
        data: {
            labels: ['HTML/CSS', 'Javascript', 'jQuery', 'Angular', 'Bootstrap'],
            datasets: [{
                data: [4, 3, 4, 2, 2]
            }]
        },
        options: options
    });

    options['title']['text'] = 'バックエンド';

    var backendChart = new Chart($('.backend_graph'), {
        type: 'radar',
        data: {
            labels: ['PHP', 'MySQL', 'PostgleSQL'],
            datasets: [{
                data: [4, 3, 4]
            }]
        },
        options: options
    });

    options['title']['text'] = 'その他';

    var otherChart = new Chart($('.other_graph'), {
        type: 'radar',
        data: {
            labels: ['Linux', 'Git', 'Apache', 'AWS', 'Photoshop'],
            datasets: [{
                data: [4, 3, 4, 2, 2]
            }]
        },
        options: options
    });
});