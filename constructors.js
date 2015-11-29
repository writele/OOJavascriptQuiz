function User() {
  this.score = 0;
}

function Content(text) {
  this.text = text;
}

Content.prototype.showHTML = function() {
  $("#content").prepend(this.text);
};

function Question(questionText, image, answers, correctAnswer, correctAnswerText) {
  this.questionText = questionText;
  this.image = image;
  this.answers = answers;
  this.choices = "";
  this.correctAnswer = correctAnswer;
  this.correctAnswerText = correctAnswerText;
}

Question.prototype = {
  showChoices: function() {
    self = this;
    this.answers.forEach(function(answer){
      if (answer == self.correctAnswer) {
        self.choices =  self.choices + "<li class='correct'>";
      }
      else {
        self.choices =  self.choices + "<li>";
      }
      self.choices = self.choices + answer;
      self.choices = self.choices + "</li>";
    });
    $("#content").append('<img src="' + this.image + '">' + '<p>' + this.questionText + '</p>' + 
      '<ul>' + this.choices + '</ul>');
  }
};

function Quiz(intro, questions, conclusion, user){
  this.intro = intro;
  this.questions = questions;
  this.conclusion = conclusion;
  this.user = user;
  this.currentQuestion = 0;
}

Quiz.prototype = {
  start: function() {
    this.intro.showHTML();
  },
  nextQuestion: function() {
    $("#content").html("");
    if (this.currentQuestion < this.questions.length)
      {
        this.questions[this.currentQuestion].showChoices();
    }
    else {
      this.showConclusion();
    }
  },
  showCorrectAnswer: function() {
    $("#content").append('<img src="' + this.questions[this.currentQuestion].image + '">' + 
   '<p>That\'s correct! ' + this.questions[this.currentQuestion].correctAnswerText + '</p>'
   + '<button class="next">Continue</button>');
    this.user.score++;
    this.currentQuestion++;
    },
  showWrongAnswer: function() {
    $("#content").append('<img src="' + this.questions[this.currentQuestion].image + '">' + '<div class="wrongAnswer">Wrong answer!<button class="showanswer">Show Correct Answer</button><div class="correctInfo">' +  this.questions[this.currentQuestion].correctAnswerText + '</div></div>' + '<button class="next">Continue</button>'); 
      $(".correctInfo").hide();
      this.currentQuestion++;
      },
  showAnswer: function() {
    $(".correctInfo").toggle(); 
  },
  showScore: function() {
  $("#content").append("<p>You answered " + this.user.score + " out of " + this.questions.length + " questions correctly!</p>");
  },
  showConclusion: function() {
    this.conclusion.showHTML();
    this.showScore();
  }

};
