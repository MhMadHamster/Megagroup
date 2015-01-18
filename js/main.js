require.config({
  paths: {
    "jquery": "libs/jquery-1.11.2.min",
    "mototools": "libs/MooTools-Core-1.5.1",
    "selectivizr": "libs/selectivizr-min",
    "placeholder": "libs/jquery.placeholder.min"
  }
});

require(["jquery", "mototools", "selectivizr"], function($, mototools, selectivizr){
});

require(["jquery", "placeholder"], function() {
  $("input, textarea").placeholder();
});

require(["jquery", "script"], function() {
});

// require(["jquery", "icheck"], function(){
//   $(".letter-checkbox").iCheck({
//     checkboxClass: 'option',
//     checkedClass: 'optionChecked'
//   });
// });