
$(document).ready(function () {
    //hide element

    // list of questions

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var timeRemaining = 15;


    var triviaGame = [{
        question: "What is the most popular fruit in the world?",
        answer: ["Banana", "Apple", "Tomato", "Watermelon"],
        correct: "Tomato",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/1zi2SFsjUwzB0at4h1\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/subway-sverige-funny-cute-\"></a></p>"
    },
    {
        question: "Which vegetable was the first to be grown in space?",
        answer: ["Bean", "Potato", "Cabbage", "Onion"],
        correct: "Potato",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/iiZpZq2rpkkvu\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/potato-gif-iiZpZq2rpkkvu\"></a></p>"

    },
    {
        question: "Which of the following fruits contains the most vitamin C?",
        answer: ["Orange", "Raspberry", "Kiwi Fruit", "Apple"],
        correct: "Kiwi Fruit",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/TkTdVluUJd864\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/food-sweet-green-TkTdVluUJd864\"></a></p>"
    },
    {
        question: "How many seeds does one strawberry have?",
        answer: ["Around 200", "Around 300", "Around 150", "Around 50"],
        correct: "Around 200",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/k5dX3BHkIQAqWRnT1H\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/cute-food-3d-k5dX3BHkIQAqWRnT1H\">via GIPHY</a></p>"
    },
    {
        question: "Which of the following vegetables has zero fat content?",
        answer: ["Onion", "Celery", "Kale", "Carrot"],
        correct: "Carrot",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/3otOKutrPVezw0TwLm\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/hug-bunny-carrot-3otOKutrPVezw0TwLm\"></a></p>"

    },
    {
        question: "Growing which fruit is the largest food industry in the world?",
        answer: ["Grape", "Tomato", "Apple", "Banana"],
        correct: "Grape",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/LNHMgJQr8wXLi\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/foxadhd-cg-kyle-goodrich-LNHMgJQr8wXLi\"></a></p>"
    },
    {
        question: "Which of the following never go bad?",
        answer: ["Rice", "Wine", "Honey", "Chocolate"],
        correct: "Honey",
        image: "<div style=\"width:30%;height:0;padding-bottom:20%;position:relative;\"><iframe src=\"https://giphy.com/embed/kc8PUzwL0rSqk\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/kc8PUzwL0rSqk\"></a></p>"
    },
    {
        question: "Which of the following food can be used to make diamonds?",
        answer: ["Peanut Butter", "Salt", "Pistachios", "Caviar"],
        correct: "Peanut Butter",
        image: "<div style=\"width:100%;height:0;padding-bottom:56%;position:relative;\"><iframe src=\"https://giphy.com/embed/Bco5Bt4kYnUcHwHdu7\" width=\"100%\" height=\"100%\" style=\"position:absolute\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe></div><p><a href=\"https://giphy.com/gifs/supersimple-nuts-peanut-butter-Bco5Bt4kYnUcHwHdu7\"></a></p>"
    }]


    var questionNumber = 0;
    var multiChoices = triviaGame[questionNumber].answer;
    var correctAnswer = triviaGame[questionNumber].correct;
    var correctImage = triviaGame[questionNumber].image;

    $("#check").hide();
    $("#result").hide();
    $("#image").hide();

    // display the first question
    $("#questions").text(triviaGame[questionNumber].question);
    // assign each choice to four "#choices div" on html
    $(".choices").children("div").each(function (index) {

        $(this).append(multiChoices[index]);
    })

    // when click on a choice
    $(".choices").children("div").on("click", function () {
        $("#check").show();
        $("#result").show();
        $("#image").show();
    // ** this indicates the element which is clicked on, use .text() in order to get the content of $this
        console.log ($(this).text());
        if ($(this).text() === correctAnswer) {
            $("#check").html("Correct! &#128512;");
            $("#result").append(correctAnswer);
        }
        else if ($(this).text() != correctAnswer) {
            $("#check").html("Nope! &#128540;");
            $("#result").append(correctAnswer);

        }
        $("#image").append(correctImage);

        // **empty first page question and choices element after $this.text()
        $("#questions").empty();
        $("#questions").empty();
        $(".choices").children("div").empty();
        $("#questions").hide();
        $(".choices").hide();



        // $("#questions").empty();
        // $(".choices").children("div").empty();
        // $("#questions").text(triviaGame[questionNumber].question);
        // var multiChoices = triviaGame[questionNumber].answer;

        // $(".choices").children("div").each(function (index) {

        //     $(this).append(multiChoices[index]);
        // })



        questionNumber++;
    })
    // for (var j=0; j<multiChoices.length;j++){
    //     $("#choices,li").text(multiChoices[j]);

    // }





    //show options
    //click an answer, click function
    //show correct answer, apped html, new div, hide questions
    //time out, display summary, timer, correct#, incorrect#, unanswered & start over (reset button)














})