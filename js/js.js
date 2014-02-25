$(function () {
    'use strict';

    var runAnimation = function(id, animation){
        var id = '#'+id;
        var animationName = animation;

        $(id).css('opacity', '0');
        if ($(id).hasClass('present')){
            $(id).css('opacity', '1');
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

                if(animationName == "fill") {
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fill 5s 3.5s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (5000 - 2000 + 1000)) + 2000;
                    pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2500 - 800 + 1000)) + 800;
                    pathsArray[i].style.strokeDashoffset = '0';
                }
                else if (animationName == "fills") {
                    pathsArray[i].style.animation = pathsArray[i].style.WebkitAnimation = 'fills 3s 2s ease forwards, fade 1s 11.2s ease';
                    pathsArray[i].style.transition = pathsArray[i].style.WebkitTransition = 'stroke-dashoffset ease-in-out';


                    pathsArray[i].style.transitionDuration = Math.floor(Math.random() * (4500 - 1000 + 1000)) + 1000;
                    pathsArray[i].style.transitionDelay = Math.floor(Math.random() * (2000 - 500 + 1000)) + 500;
                    pathsArray[i].style.strokeDashoffset = '0';
                }
            }
        }
    };
    $('#Layer_1').click(function(){
        runAnimation('Layer_1', 'fills');
        setInterval(function(){
            runAnimation('Layer_1', 'fills');
        }, 12000);
    });

});
