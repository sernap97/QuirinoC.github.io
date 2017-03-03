$(document).ready( function () {
   // $("#problema").hide();
    $("#entrevistas").hide();
    $("#experto").hide();
    $("#solucion").hide();
    
    var time = 500;
  $("#problema_Button").click(function(){
    $("#problema").slideToggle(time);
    $("#entrevistas").slideUp(time);
    $("#experto").slideUp(time);
    $("#solucion").slideUp(time);
  });
  $("#entrevistas_Button").click(function(){
    $("#problema").slideUp(time);
    $("#entrevistas").slideToggle(time);
    $("#experto").slideUp(time);
    $("#solucion").slideUp(time);
  });
  $("#experto_Button").click(function(){
    $("#problema").slideUp(time);
    $("#entrevistas").slideUp(time);
    $("#experto").slideToggle(time);
    $("#solucion").slideUp(time);
  });
  $("#solucion_Button").click(function(){
    $("#problema").slideUp(time);
    $("#entrevistas").slideUp(time);
    $("#experto").slideUp(time);
    $("#solucion").slideToggle(time);

  });
});
