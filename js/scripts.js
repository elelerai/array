$(document).ready(function() {
    $("form#favourites").submit(function(event) {

        var favourites = [ ];
        favourites.push($("input#people").val(),$("input#food").val(),$("input#animals").val(),$("input#countries").val(),$("input#cities").val());

      $("#array_output").text(favourites);



      event.preventDefault();

    });
  });
