$( document ).ready(function() {

    // Progress bar
    let containerA = document.getElementById('circleA');
  
    let circleA = new ProgressBar.Circle(containerA, {
  
      color: '#6d07b8',
      strokeWidth: 8,
      duration: 1200,
      from: { color: '#AAA'},
      to: { color: '#6d07b8'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 60);
        circle.setText(value);
        }
    });

    let containerB = document.getElementById('circleB');
    
    let circleB = new ProgressBar.Circle(containerB, {

    color: '#6d07b8',
    strokeWidth: 8,
    duration: 1400,
    from: { color: '#AAA'},
    to: { color: '#6d07b8'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 254);
        circle.setText(value);
    }
    });

    let containerC = document.getElementById('circleC');
    
    let circleC = new ProgressBar.Circle(containerC, {

    color: '#6d07b8',
    strokeWidth: 8,
    duration: 1600,
    from: { color: '#AAA'},
    to: { color: '#6d07b8'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 325);
        circle.setText(value);
    }
    });

    let containerD = document.getElementById('circleD');
    
    let circleD = new ProgressBar.Circle(containerD, {

    color: '#6d07b8',
    strokeWidth: 8,
    duration: 1800,
    from: { color: '#AAA'},
    to: { color: '#6d07b8'},

    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);

        var value = Math.round(circle.value() * 500);
        circle.setText(value);
    }
    });


    //Iniciando a progressbar quando ele chega perto   
    let dataAreaOffset = $('#parallax_dados').offset();
    let stop = 0;

    $(window).scroll(function(e) {
        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {

        circleA.animate(1.0);
        circleB.animate(1.0);
        circleC.animate(1.0);
        circleD.animate(1.0);   

        stop = 1;
        };
    });


    //Parallax
    setTimeout(function() {

        $('#parallax_dados').parallax({imageScr:'../img/cidadeparallax.png'})   

    }, 250);


    //Button Active
    $('.filter-btn').on('click', function() {

        let type = $(this).attr('id');
        let boxes = $('.project-box'); //project-box = classe das divs das imagens

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'caut-btn') {

            eachBoxes('caut', boxes);

        } else if(type == 'progres-btn') {
            eachBoxes('progres', boxes);
        } else if(type == 'escova-btn') {
            eachBoxes('escova', boxes);
        } else if(type == 'hidrat-btn') {
            eachBoxes('hidrat', boxes);
        } else {
            eachBoxes('all', boxes);
        };

    });

    function eachBoxes(type, boxes) {

        if(type == 'all') {

            $(boxes).fadeIn();

        } else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                } else {
                    $(this).fadeIn();
                };
            });
        };
    };

});


