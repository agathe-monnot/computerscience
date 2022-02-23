/* //////////////////////// GAME 1, CHOICE QUESTIONNAIRE ///////////////////////// */

/* QUESTION 1 */
$('#submit1').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];

    let question = $('.q1');
    let val= "";
    for (let i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer)
    
    /* checking the content of the array */
    if (answer == "" ) { /* no answer selected */
        $("#answer1").html('Please select an answer');
    } else if ( answer == "yes" ) { /* correct answer selected */
        $("#answer1").html('<span class="red">Correct answer!</span> Well done !');
    } else if ( answer == "no"){ /* wrong answer selected */
        $("#answer1").html('<span class="red">Wrong answer.</span> Try again!');
    } else { /* more than 2 answers selected */
        $("#answer1").html('Select only <span class="red">1</span> answer!');
    }
});


/* QUESTION 2 */
$('#submit2').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];

    let question = $('.q2');
    var val= "";
    for (var i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer);
    
    /* checking the content of the array */
    let answerString = answer.toString();
    console.log(answerString);
    if (answerString == "" ) { /* no answer selected */
        $("#answer2").html('Please select 1 or multiple answer');
    } else if ( answerString == 'yes,yes,yes' ) { /* correct answer selected */
        $("#answer2").html('<span class="red">Correct answer!</span> Well done !');
    } else if (answerString == "no"){
        $("#answer2").html('<span class="red">Wrong answer.</span> Try again!');
    } else if (answerString == "yes" || answerString == "yes,yes") {
        $("#answer2").html('You can select <span class="red">multiple</span> answers');
    } else {
        $("#answer2").html('You have one of these answers wrong. Remember you can get a <span class="red">hint</span> if you are not sure!');
    }
});


/* QUESTION 3 */
$('#submit3').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];

    let question = $('.q3');
    var val= "";
    for (var i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer);
    
    /* checking the content of the array */
    let answerString = answer.toString();
    console.log(answerString);
    if (answerString == "" ) { /* no answer selected */
        $("#answer3").html('Please select 1 or multiple answer');
    } else if ( answerString == 'yes,yes' ) { /* correct answer selected */
        $("#answer3").html('<span class="red">Correct answer!</span> Well done !');
    } else if (answerString == "no"|| answerString == "no,no"){
        $("#answer3").html('<span class="red">Wrong answer.</span> Try again!');
    } else if (answerString == "yes") {
        $("#answer3").html('You can select <span class="red">multiple</span> answers');
    } else {
        $("#answer3").html('You have one of these answers wrong. Remember you can get a <span class="red">hint</span> if you are not sure!');
    }
});

/* QUESTION 4 */
$('#submit4').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];


    let question = $('.q4');
    let val= "";
    for (let i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer)
    
    /* checking the content of the array */
    if (answer == "" ) { /* no answer selected */
        $("#answer4").html('Please select an answer');
    } else if ( answer == "yes" ) { /* correct answer selected */
        $("#answer4").html('<span class="red">Correct answer!</span> Well done !');
    } else if ( answer == "no"){ /* wrong answer selected */
        $("#answer4").html('<span class="red">Wrong answer</span>. Try again!');
    } else { /* more than 2 answers selected */
        $("#answer4").html('Select only <span class="red">1</span> answer!');
    }
});

/* QUESTION 5 */
$('#submit5').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];


    let question = $('.q5');
    let val= "";
    for (let i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer)
    
    /* checking the content of the array */
    if (answer == "" ) { /* no answer selected */
        $("#answer5").html('Please select an answer');
    } else if ( answer == "yes" ) { /* correct answer selected */
        $("#answer5").html('<span class="red">Correct answer!</span> Well done !');
    } else if ( answer == "no"){ /* wrong answer selected */
        $("#answer5").html('<span class="red">Wrong answer</span>. Try again!');
    } else { /* more than 2 answers selected */
        $("#answer5").html('Select only <span class="red">1</span> answer!');
    }
});

/* QUESTION 6 */
$('#submit6').click(function(){

    /* empty array that will contain checked boxes value */
    let answer = [];


    let question = $('.q6');
    let val= "";
    for (let i = 0; i < question.length; i++) {
        /* while loop to get all the checked boxes values */
        while (question[i].checked) {
           val = question[i].value; 
           /* push the value of the checked boxes into the array */
           answer.push(val)
           break;  
         }
    } console.log(answer)
    
    /* checking the content of the array */
    if (answer == "" ) { /* no answer selected */
        $("#answer6").html('Please select an answer');
    } else if ( answer == "yes" ) { /* correct answer selected */
        $("#answer6").html('<span class="red">Correct answer!</span> Well done !');
    } else if ( answer == "no"){ /* wrong answer selected */
        $("#answer6").html('<span class="red">Wrong answer</span>. Try again!');
    } else { /* more than 2 answers selected */
        $("#answer6").html('Select only <span class="red">1</span> answer!');
    }
});