$(function(){

    'use strict';

    var runAnimation = function(){
        var pathsArray = [];

        $('path').each(function(){
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

            pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fill 3s 2s ease forwards, fade 1s 6.2s ease';
            pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


            pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (3000 - 1000 + 1000)) + 1000;
            pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (1500 - 500 + 1000)) + 500;
            pathsArray[i].style.strokeDashoffset = '0';

        }
    };
    runAnimation();
    window.setInterval(function(){
        runAnimation();
    }, 7000);
});
