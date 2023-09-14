// assign "0" to the "score" variable

let score = 0




// Define function:

function checkAnswers() {

    // Assign "0" to the "score" variable

    let score = 0
    let result = 0


    // Assign the quiz elements to the quiz variable:
    // Write out the path to find it

    let quiz = document.forms.quiz.elements;

    // Assign the answer to the question to the answer1 variable:

    answer1 = quiz.sustainability.value;
    answer2 = quiz.environmentalissues.value;
    answer3 = quiz.EnvironmentalBehaviours.value;
ß

    // Check the answer to the first question:

    if (answer1 == "Strongly disagree") {
        score = score + 1;


    }

    if (answer1 == "Disagree") {
        score = score + 2;


    }

    if (answer1 == "Neutral") {
        score = score + 3;


    }


    if (answer1 == "Slightly Agree") {
        score = score + 4;


    }

    if (answer1 == "Strongly agree") {
        score = score + 5;


    }



    if (answer1 == "Nothing, there is nothing wrong with the environment") {
        score = score + 1;


    }

    if (answer2 == "Greenhouse Gas Emissions") {
        score = score + 2;


    }

    if (answer2 == "Biodiversity Loss") {
        score = score + 3;


    }


    if (answer2 == "Waste Management") {
        score = score + 4;


    }

    if (answer2 == "Deforestation") {
        score = score + 5;


    }




    if (answer3 == "Recycle") {
        score = score + 1;


    }

    if (answer3 == "Use an Electric Vehicle") {
        score = score + 2;


    }

    if (answer3 == "Rabbit") {
        score = score + 3;


    }


    if (answer3 == "Nothing") {
        score = score + 4;


    }


    if (score < 6) {


        result = "Python"
    }


    else if (score < 10) {


        result = "Python"
    }


    else if (score < 13) {

        result = "JavaScript"




    }


    else { 

        result = "Java"
    }



    // Display the score variable in an alert:

    alert ('The programming language you should learn is ' + result);



}