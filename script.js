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