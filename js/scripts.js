$(document).ready(function() {
  $("form#question-form").submit(function(event) {
    const a1 = parseInt($("input:radio[name=question1-radios]:checked").val());
    const a2 = parseInt($("input:radio[name=question2-radios]:checked").val());
    const a3 = parseInt($("input:radio[name=question3-radios]:checked").val());
    const a4 = parseInt($("input:radio[name=question4-radios]:checked").val());
    const a5 = parseInt($("input:radio[name=question5-radios]:checked").val());

    const total = a1 + a2 + a3 + a4 + a5;
    console.log(total);

    event.preventDefault();
  });
});