$(function(){
  $("#personality").submit(function(event){
    event.preventDefault();
    var firstName = $("#f-name").val();
    var lastName = $("#l-name").val();
    var profession = $("#prof").val();
    var type = parseInt($("input:radio[name=p-type]:checked").val());
    var genre = parseInt($("#genre").val());
      $("#score-result").append("<center>" + type + genre + "</center>").slideDown();
  })
})
