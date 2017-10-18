$(function(){
  var credit = 0;
  $("#personality").submit(function(event){
    event.preventDefault();
    var firstName = $("#f-name").val();
    var lastName = $("#l-name").val();
    var profession = $("#prof").val();
    var type = parseInt($("input:radio[name=p-type]:checked").val());
    var genre = parseInt($("#genre").val());
    var result = type + genre;
    credit = result;
    $("#score-result").text("$" + credit);
  });

  $("#referral").submit(function(event){
    var email = $("#ref-email").val();
    event.preventDefault();
    $("#referrals").append(email + "<br>");
    $(".no-ref").hide();
    credit = credit + 50;
    $("#score-result").text(credit);
  });
});
