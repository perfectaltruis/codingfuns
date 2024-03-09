   function submitQuiz() {
      const answers = {
        q1: "paris",
        q2: "mars",
        q3: "bluewhale",
        q4: "shakespeare",
        q5: "mitochondria"
      };
      
      let score = 0;
      
      // Check user's answers
      for (const question in answers) {
        const selectedAnswer = document.querySelector(`input[name=${question}]:checked`);
        if (selectedAnswer && selectedAnswer.value === answers[question]) {
          score++;
        }
      }

      // Display the result
      const resultElement = document.getElementById("result");
      resultElement.innerHTML = `<p>Your score is: ${score} out of 5</p>`;
    }
