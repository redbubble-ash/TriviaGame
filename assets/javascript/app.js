
$(document).ready(function () {

    // list of questions

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 15;


    var triviaGame = [{
        question: "What is the most popular fruit in the world?",
        answer: ["Banana", "Apple", "Tomato", "Watermelon"],
        correct: "Tomato",
        image: "<iframe src=\"https://giphy.com/embed/1zi2SFsjUwzB0at4h1\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/subway-sverige-funny-cute-1zi2SFsjUwzB0at4h1\">via GIPHY</a></p>"
    },
    {
        question: "Which vegetable was the first to be grown in space?",
        answer: ["Bean", "Potato", "Cabbage", "Onion"],
        correct: "Potato",
        image: "<iframe src=\"https://giphy.com/embed/bPShx901m0HHG\" width=\"480\" height=\"428\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/potato-dancing-bPShx901m0HHG\">via GIPHY</a></p>"

    },
    {  question: "Which of the following fruits contains the most vitamin C?",
       answer: ["Orange","Raspberry","Kiwi Fruit", "Apple"],
       correct: "Kiwi Fruit",
       image: "<iframe src=\"https://giphy.com/embed/G2mohnSO9SUDe\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/gifnews-artist-on-tumblr-kyle-goodrich-G2mohnSO9SUDe\">via GIPHY</a></p>"
    },
    {
        question:"How many seeds does one strawberry have?",
        answer: ["Around 200","Around 300","Around 150", "Around 50"],
        correct: "Around 200",
        image: "<iframe src=\"https://giphy.com/embed/k5dX3BHkIQAqWRnT1H\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/cute-food-3d-k5dX3BHkIQAqWRnT1H\">via GIPHY</a></p>"
    },
    {   question: "Which of the following vegetables has zero fat content?",
        answer: ["Onion", "Celery", "Kale", "Carrot"],
        correct: "Carrot",
        image: "<iframe src=\"https://giphy.com/embed/3otOKutrPVezw0TwLm\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/hug-bunny-carrot-3otOKutrPVezw0TwLm\">via GIPHY</a></p>"

    },
    {
        question: "Growing which fruit is the largest food industry in the world?",
        answer: ["Grape", "Tomato", "Apple", "Banana" ],
        correct: "Grape",
        image:"<iframe src=\"https://giphy.com/embed/LNHMgJQr8wXLi\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/foxadhd-cg-kyle-goodrich-LNHMgJQr8wXLi\">via GIPHY</a></p>"
    },
    {
        question: "Which of the following never go bad?",
        answer: ["Rice","Wine","Honey","Chocolate"],
        correct: "Honey",
        image:"<iframe src=\"https://giphy.com/embed/kc8PUzwL0rSqk\" width=\"461\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/kc8PUzwL0rSqk\">via GIPHY</a></p>"
    },
    {
        question: "Which of the following food can be used to make diamonds?",
        answer: ["Peanut Butter", "Salt", "Pistachios", "Caviar"],
        correct: "Peanut Butter",
        image: "<iframe src=\"https://giphy.com/embed/4NsdHaUJCxhgA\" width=\"480\" height=\"480\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p><a href=\"https://giphy.com/gifs/jif-peanut-butter-dancing-4NsdHaUJCxhgA\">via GIPHY</a></p>"
    }]



    // time remianing
    //show questions
    //show options
    //click an answer
    //answer
    //summary, timer, correct#, incorrect#, unanswered & start over (reset button)


})