$(document).ready(function() {
  $("form#question-form").submit(function(event) {
    const a1 = $("input:radio[name=question1-radios]:checked").val()

    event.preventDefault();
  });
});