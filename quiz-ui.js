$(document).on("click", ".next", quiz.nextQuestion.bind(quiz));

$(document).on("click", "li", function() {
  $("#content").html("");
  if($(this).hasClass("correct")) {
    quiz.showCorrectAnswer();
  }
  else {
    quiz.showWrongAnswer();
  }
});


$(document).on("click", ".showanswer", quiz.showAnswer);

$(document).on("click", "#reset", quiz.reset.bind(quiz));

