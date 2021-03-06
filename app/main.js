$(document).ready(function(){
  rotateHamburger();
  dropDown();
  typingEffect();
  imageHover();
  eventlyClick();
  twigClick();
  skClick();
  dsClick();

  $('.hoverLink').localScroll({duration:500});
  $('.dropDownHoverLink').localScroll({duration:500});
})

function rotateHamburger(){
  $('.hamburger').click(function(){
    $('.hamElement').rotate({count:1, duration:0.4});
  });
  $('.mobileHamburger').click(function(){
    $('.hamElement').rotate({count:1, duration:0.4});
  });
}

function dropDown(){
  $('.hamburger').click(function(){
    if($('.show').hasClass('showDropDown')){
      $('.show').slideUp(400, function(){
      });
    } else {
        $('.show').slideDown(400, function(){
      });
    }
    $('.show').toggleClass("showDropDown");
  });
  $('.mobileHamburger').click(function(){
    if($('.show').hasClass('showDropDown')){
      $('.show').slideUp(400, function(){
      });
    } else {
        $('.show').slideDown(400, function(){
      });
    }
    $('.show').toggleClass("showDropDown");
  })
}

function typingEffect(){
  $(".typing").typed({
    strings: ["^2000 Hello", "^1500 Welcome to my Personal Website", "^1000 Sam Linehan", "^1000 Full Stack Developer"],
    typeSpeed: 0,
    showCursor: false
  });
}

function imageHover(){
  $("img.projectElement").hover(function(){
    $(this).addClass("imageOpacity");
  }, function(){
    $(this).removeClass("imageOpacity");
  });
}

function eventlyClick(){
  $("#eventlyImage").click(function(){
    vex.dialog.open({
      input:
        "<p>A mobile event app that allows users to join the event they are attending and interact with other attendees in real time.  Users search for an event (or create one if it does not exist) and are then directed to that event’s live feed. While on the live feed, users can create a post, read other posts, and select favorite posts.</p>",
      message:
        "<div><h1>Evently</h1></div>"
    })
  })
}

function twigClick() {
  $("#twigImage").click(function(){
    vex.dialog.open({
      input:
        "<p>A representation of a portion of the tree of life. By creating an interactive, radial dendrogram users are able to see taxonomic relationships between species. The significance of this project is not just in the final product, but in the technological scope as well. We were faced with the challenge of incorporating at least one new significant technology that was not taught in the program. We decided to use D3.js to create the dendrogram and Python with the Flask web framework to serve our backend.</p>",
      message:
        "<div><h1>Twig of Life</h1></div>"
    })
  })
}

function skClick(){
  $("#skImage").click(function(){
    vex.dialog.open({
      input:
        "<p>Stock Kings is a web app that simulates the stock market in real time. The app is designed as a game where users create an account and are allowed to buy and sell stocks from the S&P 100. Each trading day, users begin with $10,000 and the value of their investments are updated every five minutes to reflect the market. Users are also able to view a portfolio of the stocks they own as well as how they are performing against other users. At the end of the trading day, all ending balances are tallied and stored in each individual user's balance history.</p>",
      message:
        "<div><h1>Stock Kings</h1></div>"
    })
  })
}

function dsClick(){
  $("#dsImage").click(function(){
    vex.dialog.open({
      input:
      "<p>The Dark Star Project is a web app that gives users information about the stars in our galaxy. Some of this information includes the distance in light years from earth, the luminosity of that stars, and whether or not there are any exo-planets in a star’s system. The data used in this project comes from Star API, which compiled public data provided by the American Museum of Natural History. To access information about a star, the user types the name of that star into the search bar and presses submit. There is also a random generated list of stars to aide the user in their search because the majority of stars aren’t known. The web app was made for those who have a general interest in astronomy and if there are any planets that could possibly be colonized.</p>",
      message:
      "<div><h1>Dark Star Project</h1></div>"
    })
  })
}


/* Animation code from jQuery-Rotate-Plugin v0.2 by anatol.at
http://jsfiddle.net/Anatol/T6kDR/ */

$.fn.rotate=function(options) {
  var $this=$(this), prefixes, opts, wait4css=0;
  prefixes=['-Webkit-', '-Moz-', '-O-', '-ms-', ''];
  opts=$.extend({
    startDeg: false,
    endDeg: 360,
    duration: 1,
    count: 1,
    easing: 'linear',
    animate: {},
    forceJS: false
  }, options);

  function supports(prop) {
    var can=false, style=document.createElement('div').style;
    $.each(prefixes, function(i, prefix) {
      if (style[prefix.replace(/\-/g, '')+prop]==='') {
        can=true;
      }
    });
    return can;
  }

  function prefixed(prop, value) {
    var css={};
    if (!supports.transform) {
      return css;
    }
    $.each(prefixes, function(i, prefix) {
      css[prefix.toLowerCase()+prop]=value || '';
    });
    return css;
  }

  function generateFilter(deg) {
    var rot, cos, sin, matrix;
    if (supports.transform) {
      return '';
    }
    rot=deg>=0 ? Math.PI*deg/180 : Math.PI*(360+deg)/180;
    cos=Math.cos(rot);
    sin=Math.sin(rot);
    matrix='M11='+cos+',M12='+(-sin)+',M21='+sin+',M22='+cos+',SizingMethod="auto expand"';
    return 'progid:DXImageTransform.Microsoft.Matrix('+matrix+')';
  }

  supports.transform=supports('Transform');
  supports.transition=supports('Transition');

  opts.endDeg*=opts.count;
  opts.duration*=opts.count;

  if (supports.transition && !opts.forceJS) { // CSS-Transition
    if ((/Firefox/).test(navigator.userAgent)) {
      wait4css=(!options||!options.animate)&&(opts.startDeg===false||opts.startDeg>=0)?0:25;
    }
    $this.queue(function(next) {
      if (opts.startDeg!==false) {
        $this.css(prefixed('transform', 'rotate('+opts.startDeg+'deg)'));
      }
      setTimeout(function() {
        $this
          .css(prefixed('transition', 'all '+opts.duration+'s '+opts.easing))
          .css(prefixed('transform', 'rotate('+opts.endDeg+'deg)'))
          .css(opts.animate);
      }, wait4css);

      setTimeout(function() {
        $this.css(prefixed('transition'));
        if (!opts.persist) {
          $this.css(prefixed('transform'));
        }
        next();
      }, (opts.duration*1000)-wait4css);
    });

  } else { // JavaScript-Animation + filter
    if (opts.startDeg===false) {
      opts.startDeg=$this.data('rotated') || 0;
    }
    opts.animate.perc=100;

    $this.animate(opts.animate, {
      duration: opts.duration*1000,
      easing: $.easing[opts.easing] ? opts.easing : '',
      step: function(perc, fx) {
        var deg;
        if (fx.prop==='perc') {
          deg=opts.startDeg+(opts.endDeg-opts.startDeg)*perc/100;
          $this
            .css(prefixed('transform', 'rotate('+deg+'deg)'))
            .css('filter', generateFilter(deg));
        }
      },
      complete: function() {
        if (opts.persist) {
          while (opts.endDeg>=360) {
            opts.endDeg-=360;
          }
        } else {
          opts.endDeg=0;
          $this.css(prefixed('transform'));
        }
        $this.css('perc', 0).data('rotated', opts.endDeg);
      }
    });
  }

  return $this;
};
