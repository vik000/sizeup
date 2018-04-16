window.jQuery = window.$ = require('jquery');

$( document ).ready(function() {
    ajax_films();
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
