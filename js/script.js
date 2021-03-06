$(function() {

  //Laden van de antwoorden
  $(".question").each(function(i)
  {
    var xmlhttp, text;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open('GET', 'antwoorden/antwoord' + (i + 1) + '.txt', false);
    xmlhttp.send();
    text = xmlhttp.responseText;

    $(this).find(".antwoorden").html(text);
  });

  //
  $(".question").click(function() {
    $(this).find(".antwoorden").slideToggle();
  });

  $(".question").css("cursor", "pointer");

  $(".question").mouseover(function() {
    $(this).find(".antwoorden_headers").stop().animate({fontSize: '24px'}, 200);
  });

  $(".question").mouseout(function() {
    $(this).find(".antwoorden_headers").stop().animate({fontSize: '20px'}, 200);
  });

});

// Here you can adjust the settings for particles.js
particlesJS("particle-js", {
    "particles": {
      "number": {
        "value": 150,
        "density": {
          "enable": true,
          "value_area": 400
        }
      },
      "color": {
        "value": "#FFFFFF"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#FFFFFF"
        },
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#FFFFFF",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 5,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": true,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "grab"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });