// var flavor = $("input:radio[name=flavor]:checked").val(); reading value
$(document).ready(function() {

  $("form#questions").submit(function(event) {
    event.preventDefault();
    var total1 = parseInt($("input:radio[name=question1]:checked").val());
    var total2 = parseInt($("input:radio[name=question2]:checked").val());
    var favoriteColor = $("#color").val();

    var total3 = $("#dob").val();

    $("#output").text("Your date is set on " + total3);

    var finaltotal = total1+total2;

    if (finaltotal >= 5) {
      $('.kesha').show();
    } else if (finaltotal >=3 && finaltotal <5) {
      $('.betty').show();
    } else if (finaltotal ===2){
      $('.trump').show();
    }


    document.body.style.backgroundColor = favoriteColor;

  });


});
