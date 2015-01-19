$(document).ready(function(){

  var allTabs = $(".letter-tab").next();
  if (allTabs.get(0)) {
    allTabs.prev().first().addClass("checked");
  };
  allTabs.on("click", function(){
    if (!$(this).prev().hasClass("checked")) {
      allTabs.prev().removeClass("checked");
      allTabs
        .prev()
        .not(".checked")
        .next()
        .css({
          "background-color": "#f8f8f8",
          "color": "#252525",
        }).hover(function(){
          $(this).css({"cursor": "pointer", "color": "#959595"});
        }, function(){
          $(this).css({"cursor"};)
        });
      $(this).prev().addClass("checked");
      $(this)
    };
  });

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