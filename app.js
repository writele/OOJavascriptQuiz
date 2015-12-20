var intro1 = new Content("There are over 5,000 animal species that are considered endangered, or facing a high risk of extinction, according to the International Union for Conservation of Nature. Take this quiz to learn more and to test your own knowledge of endangered animals! Click the button below to continue.");
var conclusion1 = new Content("<p>Thanks for taking my quiz!</p><p>To learn more about endangered species, consider visiting the <a href='http://www.worldwildlife.org/''>World Wildlife Fund</a> or <a href='http://www.defenders.org/''>Defenders of Wildlife</a> websites.</p>");

var quizQuestions = [];

var question1Answer = "This is the Leadbeater's Possum, local to Victoria, Australia. Thought extinct for 50 years, this species was rediscovered in 1961. They are threatened by forest fires and deforestation, which eliminates the hollow-bearing trees in which they build their nests.";
var question1 = new Question("What animal is this?", "imgs/animal1.jpg", ["Squirrel", "Possum", "Chincilla", "Mouse", "Weasel"], "Possum", question1Answer);

var question2Answer = "This is the Mohave Ground Squirrel. These small creatures skillfully survive the harsh California desert. Their elusive nature makes them difficult to study or observe.";
var question2 = new Question("What animal is this?", "imgs/animal2.jpg", ["Groundhog", "Possum", "Squirrel", "Rat", "Ferret"], "Squirrel", question2Answer);

var question3Answer = "This is the Saola, or Vu Quang Ox. Living in Lao and Vietnam, this critically endangered species is estimated to number under 700, with none in captivity. They are threatened by hunting and habitat loss.";
var question3 = new Question("What animal is this?", "imgs/animal3.jpg", ["Zebra", "Goat", "Deer", "Ox", "Horse"], "Ox", question3Answer);

var question4Answer = "This is the Bonobo. Bonobos reside in the Democratic Republic of Congo, and share 98.5% DNA with humans. The species is highly intelligent and possesses a complex, matriarchal social structure.";
var question4 = new Question("What animal is this?", "imgs/animal4.jpg", ["Bonobo", "Chimpanzee", "Gorilla", "Orangutan", "Monkey"], "Bonobo", question4Answer);

var question5Answer = "This is the Sifaka. These lemurs, found on the island of Madagascar, travel by climbing and leaping vertically from tree to tree. It is socially taboo to eat sifaka in most of Madagascar, but they are still threatened by forest destruction and some hunters.";
var question5 = new Question("What animal is this?", "imgs/animal5.jpg", ["Sloth", "Monkey", "Squirrel", "Lemur", "Weasel"], "Lemur", question5Answer);

quizQuestions.push(question1);
quizQuestions.push(question2);
quizQuestions.push(question3);
quizQuestions.push(question4);
quizQuestions.push(question5);

var user1 = new User();
var quiz = new Quiz(intro1, quizQuestions, conclusion1, user1);

quiz.start();