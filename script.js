let currentQuestionIndex = 0;
let score = 0;
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
        question: "Naruto est le fisl du quatrième Hokage",
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
        question: "Quels sont les deux techniques Que Naruto aime utiliser ?",
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

    if (question.type === "single") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => checkAnswer(answer);
            answerContainer.appendChild(btn);
        });
    } else if (question.type === "multiple") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => checkMultipleAnswer(answer);
            answerContainer.appendChild(btn);
        });
    } else if (question.type === "true/false") {
        question.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.textContent = answer;
            btn.classList.add("answer-btn");
            btn.onclick = () => checkAnswer(answer);
            answerContainer.appendChild(btn);
        });
    }
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestionIndex];
    const resultContainer = document.getElementById("result-container");

    if (selectedAnswer === question.correctAnswer) {
        score++;
        resultContainer.textContent = "Correct!";
        resultContainer.classList.add("correct");
    } else {
        resultContainer.textContent = "Incorrect!";
        resultContainer.classList.add("incorrect");
    }

    document.getElementById("next-btn").style.display = "block";  // Affiche le bouton suivant
}

function nextQuestion() {
    currentQuestionIndex++;
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("result-container").textContent = "";
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showFinalScore();
    }
}