$(function () {

    'use strict';

    var runAnimation = function(id){
        var id = '#'+id;
        var pathsArray = [];

        $(id + ' path').each(function(){
            pathsArray.push(this);
        });

        for(var i = 0; i < pathsArray.length; i++) {
            pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'none';
            pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'none';
            var length = pathsArray[i].getTotalLength();
            pathsArray[i].style.strokeDasharray = length + ' ' + length;
            pathsArray[i].style.strokeDashoffset = length;
            pathsArray[i].style.strokeWidth = '1';
            pathsArray[i].getBoundingClientRect();

            pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fill 3s 2s ease forwards, fade 1s 11.2s ease';
            // This gives problems with Mozilla
            // pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset 2s 3s ease-in-out';
            pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


            pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (4000 - 1000 + 1000)) + 1000;
            pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2000 - 500 + 1000)) + 500;
            pathsArray[i].style.strokeDashoffset = '0';

        }
    };

    runAnimation('Layer_1');
    window.setInterval(function(){
        runAnimation('Layer_1');
        clearInterval();
    }, 12000);

});
