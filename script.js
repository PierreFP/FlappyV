function bougerHaut() {
    $("#birdy").animate({
        marginBottom: '+=100px'
    }, speed = 200, easing = "swing");
}

function bougerBas() {
    $("#birdy").animate({
        marginTop: '+=100px'
    }, speed = 200, easing = "swing");
}

function bougerGauche() {
    $("#birdy").animate({
        marginRight: '+=100px'
    }, speed = 200, easing = "swing");
}

function bougerDroite() {
    $("#birdy").animate({
        marginLeft: '+=100px'
    }, speed = 200, easing = "swing");
}

$("#birdy").ready(function () {
    $("img").on('click', function () {
        alert("Jul president mn negro");
    });
});



$(document).keyup(function (touche) {
    var appui = touche.which || touche.keyCode;
    if (appui == 38) {
        bougerHaut();
    }
});


$(document).keyup(function (touche) {
    var appui = touche.which || touche.keyCode;
    if (appui == 40) {
        bougerBas();
    }
});


$(document).keyup(function (touche) {
    var appui = touche.which || touche.keyCode;
    if (appui == 37) {
        bougerGauche();
    }
});


$(document).keyup(function (touche) {
    var appui = touche.which || touche.keyCode;
    if (appui == 39) {
        bougerDroite();
    }
});

