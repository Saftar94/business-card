$(document).ready(function() {
  $("#nav .nav1").click(function() {
      if (!$(this).next().is(":visible")) {
          $(this).find("span").html('&ndash;');
          $(this).next().slideDown('fast');
      }
      else {
          $(this).find("span").html('+');
          $(this).next().slideUp('fast');
      }
      return false;
  });

  $(".about").click(function() {
      $(this).css("color", "#ff4040");
      $(this).siblings().css("color", "#999");

      var id = "a-"+$(this).attr("id").replace("a", "");

      $("#p-about").show();
      $("#"+id).slideDown('fast');
      $("#"+id).siblings().slideUp('fast');
      return false;
  });
});