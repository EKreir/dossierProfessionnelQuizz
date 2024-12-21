let currentQuestionIndex = 0;
let score = 0;
const selectedAnswers = [];  // Tableau pour stocker les réponses sélectionnées pour les questions à choix multiples

const questions = [
    {
        question: "Qui est le premier sensei de Naruto ?",
        type: "single", // Choix unique
        answers: ["Kakashi", "Iruka", "Gaï", "Hiruzen"],
        correctAnswer: "Iruka"
    },
    {
        question: "Qui étaient les deux autres équipiers de Naruto dans l'équipe 7 ?",
        type: "multiple", // Choix multiples
        answers: ["Sakura", "Tenten", "Gaara", "Sasuke"],
        correctAnswer: ["Sasuke", "Sakura"]
    },
    {
        question: "Naruto est le fils du quatrième Hokage",
        type: "true/false", // Vrai/Faux
        answers: ["Vrai", "Faux"],
        correctAnswer: "Vrai"
    },
    {
        question: "Quel est le nom du démon renard à neuf queues qui est scellé en Naruto ?",
        type: "single",
        answers: ["Kurama", "Shukaku", "Matatabi", "Isobu"],
        correctAnswer: "Kurama"
    },
    {
        question: "Qui est le rival de Naruto ?",
        type: "single",
        answers: ["Lee", "Saï", "Shikamaru", "Sasuke"],
        correctAnswer: "Sasuke"
    },
    {
        question: "Quels sont les deux techniques que Naruto aime utiliser ?",
        type: "multiple",
        answers: ["Rasengan", "Chidori", "Kage Bunshin", "Rasen Shuriken"],
        correctAnswer: ["Rasengan", "Kage Bunshin"]
    },
    {
        question: "Le grand frère de Sasuke est Shisui",
        type: "true/false",
        answers: ["Vrai", "Faux"],
        correctAnswer: "Faux"
    },
    {
        question: "Qui est le fils de Hiruzen Sarutobi le troisième Hokage ?",
        type: "single",
        answers: ["Asuma", "Kakashi", "Iruka"],
        correctAnswer: "Asuma"
    },
    {
        question: "Qui font partie du trio légendaire ?",
        type: "multiple",
        answers: ["Jiraya", "Tsunade", "Orochimaru", "Hiruzen"],
        correctAnswer: ["Jiraya", "Tsunade", "Orochimaru"]
    },
    {
        question: "Qui est le premier Hokage ?",
        type: "single",
        answers: ["Hashirama", "Tobirama", "Hiruzen", "Minato"],
        correctAnswer: "Hashirama"
    }
];

function shuffleQuestions() {
    questions.sort(() => Math.random() - 0.5);  // Mélange les questions de manière aléatoire
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-text").textContent = question.question;
    const answerContainer = document.getElementById("answer-container");
    answerContainer.innerHTML = "";  // Réinitialise les réponses
    selectedAnswers.length = 0;  // Réinitialiser le tableau des réponses sélectionnées

    // Créer les boutons de réponse en fonction du type de question
    if (question.type === "single") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => toggleSingleAnswer(answer, btn);
            answerContainer.appendChild(btn);
        });
    } else if (question.type === "multiple") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => toggleMultipleAnswer(answer, btn);
            answerContainer.appendChild(btn);
        });
    } else if (question.type === "true/false") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => toggleSingleAnswer(answer, btn);
            answerContainer.appendChild(btn);
        });
    }

    // Ajoute un bouton de validation
    const validateBtn = document.createElement("button");
    validateBtn.textContent = "Valider";
    validateBtn.classList.add("validate-btn");
    validateBtn.onclick = checkAnswers;
    answerContainer.appendChild(validateBtn);
}

function toggleSingleAnswer(answer, btn) {
    // Pour les réponses à choix unique, on n'autorise qu'une seule sélection
    const selectedBtns = document.querySelectorAll(".answer-btn.selected");
    selectedBtns.forEach(button => button.classList.remove("selected"));

    btn.classList.add("selected");
    selectedAnswers.length = 0;  // Réinitialise les réponses sélectionnées
    selectedAnswers.push(answer);  // Ajoute la réponse sélectionnée
}

function toggleMultipleAnswer(answer, btn) {
    // Permet de sélectionner et désélectionner les réponses multiples
    if (selectedAnswers.includes(answer)) {
        const index = selectedAnswers.indexOf(answer);
        selectedAnswers.splice(index, 1);
        btn.classList.remove("selected");
    } else {
        selectedAnswers.push(answer);
        btn.classList.add("selected");
    }
}

function checkAnswers() {
    const question = questions[currentQuestionIndex];
    const resultContainer = document.getElementById("result-container");
    let isCorrect = false;

    if (question.type === "multiple") {
        const correctAnswersCount = question.correctAnswer.length;
        const selectedCorrectAnswers = selectedAnswers.filter(answer => question.correctAnswer.includes(answer));

        // Vérifie si toutes les réponses sélectionnées sont correctes et si le nombre de réponses sélectionnées est correct
        if (selectedCorrectAnswers.length === correctAnswersCount && selectedAnswers.length === correctAnswersCount) {
            isCorrect = true;
        }
    } else {
        // Vérifie les réponses pour les questions à choix unique ou vrai/faux
        if (selectedAnswers[0] === question.correctAnswer) {
            isCorrect = true;
        }
    }

    // Affiche le résultat
    if (isCorrect) {
        score++;
        resultContainer.textContent = "Correct!";
        resultContainer.classList.add("correct");
    } else {
        resultContainer.textContent = "Incorrect!";
        resultContainer.classList.add("incorrect");
        // Ajoute la réponse correcte sous le message Incorrect
        const correctAnswerText = document.createElement("div");
        correctAnswerText.textContent = `La bonne réponse était : ${Array.isArray(question.correctAnswer) ? question.correctAnswer.join(', ') : question.correctAnswer}`;
        resultContainer.appendChild(correctAnswerText);
    }

    // Afficher le bouton suivant
    document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result-container").textContent = "";
    document.getElementById("result-container").classList.remove("correct", "incorrect"); // Reset des styles
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    const scoreContainer = document.getElementById("question-text");
    const answerContainer = document.getElementById("answer-container");
    //Afficher le score final
    scoreContainer.textContent = `Votre score final est de ${score} sur ${questions.length}`;
    answerContainer.innerHTML = "";  // Réinitialise les réponses

    // Ajouter un message personnalisé en fonction du score
    let message = "";
    if (score === questions.length) {
        message = "Félicitations, tu es un vrai Hokage ! 🎉";
    } else if (score >= questions.length * 0.7) {
        message = "Très bien joué ! Tu es un jûnin de haut niveau ! 👊";
    } else if (score >= questions.length * 0.4) {
        message = "Pas mal ! Tu as encore quelques progrès à faire jeune chûnin. 💪";
    } else {
        message = "Il te reste encore du travail... Reviens à l'académie quand tu seras prêt ! 😅";
    }
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageElement.style.fontSize = "20px";
    messageElement.style.fontWeight = "bold";
    answerContainer.appendChild(messageElement);

    // Ajouter un GIF en fonction du score
    const gifElement = document.createElement("img");
    if (score === questions.length) {
        gifElement.src = "https://media.giphy.com/media/l41lYlrbG7rLZyFkg/giphy.gif"; // GIF de félicitations
    } else if (score >= questions.length * 0.7) {
        gifElement.src = "https://media.giphy.com/media/l3q2lRc4jT1gGHugA/giphy.gif"; // GIF de victoire
    } else {
        gifElement.src = "https://media.giphy.com/media/xT0xekj6qGgr5M3qDY/giphy.gif"; // GIF amusant
    }
    gifElement.alt = "GIF de fin";
    gifElement.style.marginTop = "20px";
    gifElement.style.width = "100%";
    answerContainer.appendChild(gifElement);

    // Cacher le bouton suivant
document.getElementById("next-btn").style.display = "none";
}

shuffleQuestions();
displayQuestion();