// var flavor = $("input:radio[name=flavor]:checked").val(); reading value
$(document).ready(function() {

  $("form#questions").submit(function(event) {
    event.preventDefault();
    var total = $("input:radio[name=question1]:checked").val();

    $("#output").text(total);
  });
});

// function(red){
//   alert("hello!"");
// }

// {
//   alert('hello world');
// });
//
//
// });



// alert('This is working!');
