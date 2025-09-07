function checkAnswer(button, correct) {
    const card = button.closest(".card");

    const result = card.querySelector(".result");

    if (correct) {
        result.textContent = "✅ Correct!";
        result.className = "result green";
    } else {
        result.textContent = "❌ Incorrect!";
        result.className = "result red";
    }
}