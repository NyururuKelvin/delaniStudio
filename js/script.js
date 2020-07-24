$(document).ready(function(){
    $(".design").click(function(){
        $("#design-p").toggle();
        $("#design").toggle();
    });
    $(".development").click(function(){
        $("#dev-p").toggle();
        $("#dev").toggle();
    });
    $(".product").click(function(){
        $("#product-p").toggle();
        $("#product").toggle();
     });

     $(".img_wrap").hover(function () {
      $(this).find("div").toggleClass("img_description_show");
    });

      $("#submit").click(function () {
        event.preventDefault()
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
  
        if (name == '' || email == '' || message == '') {
          $("#post").html("Please fill in all the fields");
          $(".post").css('background-color', 'red')
        } else {
          $("#post").html("Hey " + name + "!" + " we have received your message. Thank you for your feedback.")
          $(".post").css('background-color', 'green')
          $("form")[0].reset();
        }
      });
});