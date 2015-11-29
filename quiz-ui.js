$(document).on("click", ".next", quiz.nextQuestion.bind(quiz));

$(document).on("click", "li", function() {
  $("#content").html("");
  if($(this).hasClass("correct")) {
    self = quiz;
    quiz.showCorrectAnswer();
  }
  else {
    quiz.showWrongAnswer();
  }
});


$(document).on("click", ".showanswer", quiz.showAnswer);

