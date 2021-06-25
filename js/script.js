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

