//import 'tailwind.config.js';
$(document).ready(function(){
    $("#searchinput").click(function(){
        $("#searchmodal").toggle(250);
    });
    $(".search-whole-j").focusout(function(){
        $("#searchmodal").hide(250);
    });

    //Sort by Library Title
    $('.sub-filter-jw').sort(function(a, b) {
        if (a.textContent < b.textContent) {
          return -1;
        } else {
          return 1;
        }
      }).appendTo('body');
    
    /*$(".collapsable-menu").click(function(){
        $(".menu-items-1").toggle(250);
        $(".rotate-chevron").toggleClass('mdi-chevron-down mdi-chevron-right');
    });*/
    $('.collapsable-menu').click(function(){
        $(this).find('.rotate-chevron').toggleClass('mdi-chevron-down mdi-chevron-right');
        $(this).closest('.main-menu-j').find('.menu-items').toggle(250);
   });

   document.addEventListener("keydown", function(event) {
    if (event.ctrlKey && (event.key === 'q' || event.key === 'Q')) {
        $("#searchmodal").toggle(250);
        $("#searchinput").focus();
        event.preventDefault();
    }
  });
   
   $('.clear-input-j').click(function(){
        $("#searchinput").val('');
    });

    $('.reset-view-j').click(function(){
        $('.home-j').find('.rotate-chevron').addClass('mdi-chevron-down');
        $('.home-j').find('.rotate-chevron').removeClass('mdi-chevron-right');
        $('.menu-items').each(function(){
            $('.menu-items').hide(250);
        });
        //$('.menu-items').hide(250);
        //$('.home-j').find('.menu-items').show(250);
        $('.rotate-chevron').addClass('mdi-chevron-right');
        $('.rotate-chevron').removeClass('mdi-chevron-down');
        $(".sub-filter-j").show(250);
        $('.filter-j').removeClass("bg-blue-500");
        $('.filter-j').removeClass("text-gray-100");
        $('.filter-j').addClass("hover:bg-gray-300");
        $('.all-j').addClass("bg-blue-500");
        $('.all-j').addClass("text-gray-100");
        $('.all-j').removeClass("hover:bg-gray-300");
    });
    /*$(".aboutW").click(function(){
        $(".item").removeClass("text-blue-500");
        $(this).addClass("text-blue-500");
    });*/
    $('.item-j').click(function(){
        $('.item-j').not(this).each(function(){
            $(this).removeClass("text-blue-500");
            $('.page-j').hide(250); //get something like "last" class of div?
        });
        $(this).addClass("text-blue-500");
        
        // show specific div
        var classString = $(this).attr('class');
        var myClass = classString.split(' ')[0];
        $('section.'+myClass).fadeIn(500);
        /*var sectionVal;
        sessionStorage.setItem(sectionVal, $('section.'+myClass).show());*/
   });

   $('.filter-j').click(function(){
    $('.filter-j').not(this).each(function(){
        $(this).removeClass("bg-blue-500");
        $(this).removeClass("text-gray-100");
        $(this).addClass("hover:bg-gray-300");
    });
    $(this).addClass("bg-blue-500");
    $(this).addClass("text-gray-100");
    $(this).removeClass("hover:bg-gray-300");
   });
    //SEARCH
    /*var str = "Hello World!";
    var res = str.toLowerCase();*/
    $("#searchinput").on("input", function() {
        var value = $(this).val().toLowerCase();
        $("#search-j .query-j").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        $("#type").text(value);
    });

    //Filter event on sidebar
    $(".filter-j").click(function() {
        var classString = $(this).attr('class');
        var myClass = classString.split(' ')[0];
        var value = myClass.toLowerCase();
        if(value != 'all') {
            $(".sidebar-filter-j .sub-filter-j").filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
            });
            $('.home-menu-j').hide(250);
            $('.home-j .rotate-chevron').addClass('mdi-chevron-right');
            $('.home-j .rotate-chevron').removeClass('mdi-chevron-down');
        }
        else {
            $(".sub-filter-j").show();
        }
    });
});
