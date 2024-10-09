function checkAnswer(correctAnswer = 4) {
    // Function body
}
  const selectedAnswer = document.querySelector('input[name="quiz"]:checked');

            // Ensure an answer was selected
            if (selectedAnswer) {
                const userAnswer = selectedAnswer.value;

                // Compare the user's answer with the correct answer
                if (userAnswer === correctAnswer) {
                    document.getElementById("feedback").textContent = "Correct! Well done.";
                } else {
                    document.getElementById("feedback").textContent = "That's incorrect. Try again!";
                }
            } else {
                // No answer selected
                document.getElementById("feedback").textContent = "Please select an answer.";
            }
        }

        // Add an event listener to the "Submit Answer" button
        document.getElementById("submit-answer").addEventListener("click", checkAnswer);
