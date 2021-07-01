
// view more project home 

let ourProjectsItem = $('.our-projects__item');
let ourProjectsBtn = $('.our-projects__btn');
let projectHomeHidden = $('[data-hidden="yes"]');


ourProjectsBtn.children().on('click', showMoreProjects);

function showMoreProjects (e) {
   e.preventDefault();
   projectHomeHidden.each(function (i) {
      projectHomeHidden.eq(i).slideToggle('slow', function () {
         if(projectHomeHidden.css('display') == "block"){
            ourProjectsBtn.find(':contains("Все проекты")').text('Скрыть');
         }else{
            ourProjectsBtn.find(':contains("Скрыть")').text('Все проекты');
         }
      });
   });
}

//Навигация 

$(document).ready(function () {

   $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      $('html, body').animate({
         scrollTop: $($(this).attr('href')).offset().top
      }, 500, 'linear');
   });

});


// burger menu 

$(document).ready(function() {
   $('.header__burger').click(function(e){
      $('.header__burger, .navigate').toggleClass('active');
      $('body').toggleClass('lock');
   });
   

   // navigate

   $('.navigate__item').click(function(e){
      e.preventDefault();
      setTimeout(function(){
         $('.header__burger, .navigate').removeClass('active');
      }, 400, "linear");
      // $('.header__burger, .navigate').removeClass('active');
      const ID = $(this).attr('href');
      //  console.log(ID);
      const PAGE_OFFSET = $(ID).offset().top;
      //  console.log(PAGE_OFFSET);
      $('html, body').animate({
         scrollTop: PAGE_OFFSET
      },"slow", "linear")
   });

});

