$("document").ready(function () {
  $("#button").click(function (e) {
    $(".hide").toggle();
    $("#button").hide();
  });
  e.preventDefault();
});

