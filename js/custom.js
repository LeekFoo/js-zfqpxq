AOS.init({
    offset: 300,
    duration: 1000,
    once: true,
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
});