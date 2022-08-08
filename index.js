/*Project 6: Build a three - question quiz.

    Requirements:
-Create a Github repository for this project. 
- Create an HTML form with a three - question quiz
    - Each question should have four multiple - choice answers to choose from.
- When the user submits the quiz, add a message underneath each question letting them know if they got it right / wrong(give them the correct answer).*/


function check() {
    let i = 0;
    let q1 = document.quiz.question1.value;
    let q2 = document.quiz.question2.value;
    let q3 = document.quiz.question3.value;
    let result = document.getElementById('result');
    let quiz = document.getElementById('quiz');
    if (q1 == "Austin") { i++ };
    if (q2 == "El Paso") { i++ };
    if (q3 == "I-35") { i++ };
    quiz.style.display = "none";
    result.textContent = `You got ${i} correct, out of three questions. Correct answers were: 1. Austin, 2. El Paso, 3. I-35. `;
};

