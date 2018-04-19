window.jQuery = window.$ = require('jquery');

$( document ).ready(function() {
  alert('hello 1');
    $( "button.remember-me" ).click(function(){
      $(this).toggleClass( "button-selected" );
      alert('hello');
    });
});
