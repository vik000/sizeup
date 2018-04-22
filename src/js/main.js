window.jQuery = window.$ = require('jquery');

$( document ).ready(function() {
  ajax_films();

  //landing_horizontal_scrolling:


  //JQUERY!!!
  $( document ).ready(function() {
      $( "button.remember-me" ).click(function(){
        $(this).toggleClass( "button-selected" );
      });
  });
  $( document ).ready(function() {
    $( "div.clickable-background" ).click(function(event){
      event.stopImmediatePropagation();
      $(this).toggleClass( "hidden" );
      $("div.wrap-login").toggleClass("hidden");
    });
  });
  $( document ).ready(function() {
    $( ".entrar-trigger" ).click(function(event){
      event.preventDefault();
      $("div.clickable-background").toggleClass("hidden");
      $("div.wrap-login").toggleClass("hidden");
    });
  });

});


function ajax_films(){
  $.ajax({
    type:"GET",
    url:"movies/",
    success:movies=>{
      html=""
      for(let film of films){
        html += `<div class="row">
          <div class="col-xs-12 bg-primary" style="width:50%">
            FILM 1
          </div>
          <div class="col-xs-12 bg-secondary" style="width:50%">
            FILM 2
          </div>
        </div>`
      }
    }
  });
}
