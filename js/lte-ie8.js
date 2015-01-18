$(document).ready(function(){

  $("#letter-checkbox-1").iCheck({
    checkboxClass: "option",
    uncheckedClass: "optionChecked"
  });
  $("#letter-checkbox-2").iCheck({
    checkboxClass: "option",
    uncheckedClass: "optionChecked"
  });

  $(".option").removeAttr("style");
  $(".optionChecked").css("background-size", "contain");
  setTimeout(function() {
    $(".option").removeClass("optionChecked");
  }, 0);
  $(".option").next().trigger("click");
});