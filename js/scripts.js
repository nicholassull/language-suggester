$(document).ready(function() {
  $("form#question-form").submit(function(event) {
    const a1 = $("input:radio[name=question1-radios]:checked").val()
    const a2 = $("input:radio[name=question2-radios]:checked").val()
    const a3 = $("input:radio[name=question3-radios]:checked").val()
    const a4 = $("input:radio[name=question4-radios]:checked").val()
    const a5 = $("input:radio[name=question5-radios]:checked").val()

    event.preventDefault();
  });
});