$(function() {
    var Accordion = function(el, multiple) {
      this.el = el || {};
      // more then one submenu open?
      this.multiple = multiple || false;
      
      var dropdownlink = this.el.find('.dropdownlink');
      dropdownlink.on('click',
                      { el: this.el, multiple: this.multiple },
                      this.dropdown);
    };
    
    Accordion.prototype.dropdown = function(e) {
      var $el = e.data.el,
          $this = $(this),
          //this is the ul.submenuItems
          $next = $this.next();
      
      $next.slideToggle();
      $this.parent().toggleClass('open');
      
      if(!e.data.multiple) {
        //show only one menu at the same time
        $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
      }
    }
    
    var accordion = new Accordion($('.accordion-menu'), false);



    $('.js-click-modal').click(function(){
      $('.container-auth').addClass('modal-main-open');
    });
    
    $('.js-close-modal').click(function(){
      $('.container-auth').removeClass('modal-main-open');
    });




    $(".modal").each( function(){
      $(this).wrap('<div class="overlay"></div>')
    });
    
    $(".open-modal").on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
      
      $(modal).parents(".overlay").addClass("open");
      setTimeout( function(){
        $(modal).addClass("open");
      }, 350);
      
      $(document).on('click', function(e){
        var target = $(e.target);
        
        if ($(target).hasClass("overlay")){
          $(target).find(".modal").each( function(){
            $(this).removeClass("open");
          });
          setTimeout( function(){
            $(target).removeClass("open");
          }, 350);
        }
        
      });
      
    });
    
    $(".close-modal").on('click', function(e){
      e.preventDefault();
      e.stopImmediatePropagation;
      
      var $this = $(this),
          modal = $($this).data("modal");
      
      $(modal).removeClass("open");
      setTimeout( function(){	
        $(modal).parents(".overlay").removeClass("open");
      }, 50);
      
    });	

    var $svg = $('svg').drawsvg();

    $svg.drawsvg('animate');


    var elements = $('.modal-overlay, .modal');

    $('button').click(function(){
        elements.addClass('active');
    });

    $('.close-modal').click(function(){
        elements.removeClass('active');
    });



    
    
  })

  