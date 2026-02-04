// Italian Language Quiz Questions
// All content created by professional Italian teacher
// 40 questions with explanations in Russian

const quizQuestions = [
    {
        id: 1,
        question: "Как сказать 'стол' по-итальянски?",
        options: [
            "Sedia",
            "Tavolo",
            "Finestra",
            "Porta"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Tavolo' означает стол. 'Sedia' — это стул, 'Finestra' — окно, 'Porta' — дверь."
    },
    {
        id: 2,
        question: "Выберите правильный артикль: ___ amico (друг)",
        options: [
            "Il",
            "La",
            "Un",
            "Lo"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Un amico' — неопределённый артикль мужского рода. 'Il' используется для определённых существительных мужского рода."
    },
    {
        id: 3,
        question: "Как будет 'я говорю' по-итальянски?",
        options: [
            "Io parlo",
            "Io parli",
            "Io parla",
            "Io parlano"
        ],
        correctIndex: 0,
        explanation: "Правильно! Глагол 'parlare' в форме 'io parlo'. Окончание -o характерно для первого лица единственного числа."
    },
    {
        id: 4,
        question: "Как сказать 'я хочу воду'?",
        options: [
            "Io voglio acqua",
            "Io volere acqua",
            "Io vuole acqua",
            "Io vogliono acqua"
        ],
        correctIndex: 0,
        explanation: "Правильно! 'Voglio' — форма глагола 'volere' (хотеть) для первого лица единственного числа."
    },
    {
        id: 5,
        question: "Выберите правильный предлог: Vado ___ Italia.",
        options: [
            "a",
            "in",
            "su",
            "con"
        ],
        correctIndex: 1,
        explanation: "Правильно! С названиями стран женского рода используется предлог 'in'. Италия — Italia (женский род)."
    },
    {
        id: 6,
        question: "Как будет 'красный' по-итальянски?",
        options: [
            "Verde",
            "Blu",
            "Rosso",
            "Giallo"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Rosso' означает красный. 'Verde' — зелёный, 'Blu' — синий, 'Giallo' — жёлтый."
    },
    {
        id: 7,
        question: "Как сказать 'спасибо большое'?",
        options: [
            "Per favore",
            "Mi dispiace",
            "Grazie mille",
            "Prego"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Grazie mille' — 'спасибо большое'. 'Per favore' — пожалуйста, 'Mi dispiace' — извините, 'Prego' — пожалуйста (в ответ на спасибо)."
    },
    {
        id: 8,
        question: "Выберите правильную форму: Lei ___ francese? (Вы говорите по-французски?)",
        options: [
            "parla",
            "parli",
            "parlo",
            "parlano"
        ],
        correctIndex: 0,
        explanation: "Правильно! С местоимением 'Lei' (вежливая форма 'Вы') используется форма третьего лица единственного числа — 'parla'."
    },
    {
        id: 9,
        question: "Как будет 'деньги' по-итальянски?",
        options: [
            "Tempo",
            "Soldi",
            "Libri",
            "Amici"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Soldi' означает деньги. 'Tempo' — время, 'Libri' — книги, 'Amici' — друзья."
    },
    {
        id: 10,
        question: "Выберите правильный вариант: Io ___ una mela. (Я ем яблоко.)",
        options: [
            "mangio",
            "mangi",
            "mangia",
            "mangiamo"
        ],
        correctIndex: 0,
        explanation: "Правильно! Глагол 'mangiare' в форме первого лица единственного числа — 'mangio'."
    },
    {
        id: 11,
        question: "Что означает 'falso amico' (фальшивый друг)?",
        options: [
            "Настоящий друг",
            "Ложный друг (слово, похожее в двух языках, но с разным значением)",
            "Враг",
            "Знакомый"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Falso amico' — это лингвистический термин для слов, которые похожи в двух языках, но имеют разное значение."
    },
    {
        id: 12,
        question: "Как сказать 'сколько стоит?'",
        options: [
            "Dove si trova?",
            "Che ore sono?",
            "Quanto costa?",
            "Come stai?"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Quanto costa?' — 'сколько стоит?'. 'Dove si trova?' — где находится?, 'Che ore sono?' — который час?, 'Come stai?' — как дела?"
    },
    {
        id: 13,
        question: "Выберите правильный артикль: ___ zaino (рюкзак)",
        options: [
            "Il",
            "La",
            "Lo",
            "Gli"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Lo zaino' — определённый артикль используется перед словами, начинающимися с z, s+согласная, gn, ps, x, y."
    },
    {
        id: 14,
        question: "Как будет 'вчера' по-итальянски?",
        options: [
            "Oggi",
            "Domani",
            "Ieri",
            "Adesso"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Ieri' означает вчера. 'Oggi' — сегодня, 'Domani' — завтра, 'Adesso' — сейчас."
    },
    {
        id: 15,
        question: "Выберите правильный предлог: Sono ___ casa. (Я дома.)",
        options: [
            "a",
            "in",
            "di",
            "da"
        ],
        correctIndex: 0,
        explanation: "Правильно! Выражение 'a casa' означает 'дома'. Это устойчивое сочетание."
    },
    {
        id: 16,
        question: "Что означает слово 'attualmente'?",
        options: [
            "На самом деле",
            "В настоящее время",
            "Актуально",
            "Внимательно"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Attualmente' означает 'в настоящее время'. Это false friend — в русском 'актуально' имеет другое значение."
    },
    {
        id: 17,
        question: "Как сказать 'мне нравится'?",
        options: [
            "Mi piace",
            "Mi dispiace",
            "Mi chiamo",
            "Mi trovo"
        ],
        correctIndex: 0,
        explanation: "Правильно! 'Mi piace' — 'мне нравится'. 'Mi dispiace' — мне жаль, 'Mi chiamo' — меня зовут, 'Mi trovo' — я нахожусь."
    },
    {
        id: 18,
        question: "Выберите правильную форму прошедшего времени: Ieri io ___ al cinema. (Вчера я ходил в кино.)",
        options: [
            "vado",
            "vado andato",
            "sono andato",
            "vado andare"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Sono andato' — форма passato prossimo (ближайшего прошедшего) для глагола 'andare' (идти)."
    },
    {
        id: 19,
        question: "Как будет 'брат' по-итальянски?",
        options: [
            "Sorella",
            "Madre",
            "Padre",
            "Fratello"
        ],
        correctIndex: 3,
        explanation: "Правильно! 'Fratello' означает брат. 'Sorella' — сестра, 'Madre' — мать, 'Padre' — отец."
    },
    {
        id: 20,
        question: "Что означает фраза 'in bocca al lupo'?",
        options: [
            "Осторожно с волком",
            "Ни пуха ни пера",
            "Приятного аппетита",
            "Добро пожаловать"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'In bocca al lupo' буквально означает 'в пасть волку', аналог русского 'ни пуха ни пера'. Ответ: 'Crepi il lupo' или 'Crepi'."
    },
    {
        id: 21,
        question: "Выберите правильную форму: Noi ___ italiani. (Мы итальянцы.)",
        options: [
            "siamo",
            "sono",
            "siete",
            "sei"
        ],
        correctIndex: 0,
        explanation: "Правильно! Глагол 'essere' (быть) в форме первого лица множественного числа — 'siamo'."
    },
    {
        id: 22,
        question: "Как сказать 'я не понимаю'?",
        options: [
            "Non so",
            "Non capisco",
            "Non parlo",
            "Non voglio"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Non capisco' — я не понимаю. 'Non so' — я не знаю, 'Non parlo' — я не говорю, 'Non voglio' — я не хочу."
    },
    {
        id: 23,
        question: "Выберите правильный предлог: Il libro è ___ tavolo. (Книга на столе.)",
        options: [
            "su",
            "in",
            "a",
            "per"
        ],
        correctIndex: 0,
        explanation: "Правильно! Предлог 'su' означает 'на' (поверхности). 'Il libro è sul tavolo' — книга на столе."
    },
    {
        id: 24,
        question: "Как будет 'работа' по-итальянски?",
        options: [
            "Scuola",
            "Lavoro",
            "Ufficio",
            "Casa"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Lavoro' означает работа. 'Scuola' — школа, 'Ufficio' — офис, 'Casa' — дом."
    },
    {
        id: 25,
        question: "Что означает 'magari'?",
        options: [
            "Всегда",
            "Может быть, возможно (часто с оттенком желания)",
            "Никогда",
            "Обязательно"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Magari' означает 'может быть, возможно', часто выражая желание. Например: 'Magari vengo' — может быть приду (хотелось бы прийти)."
    },
    {
        id: 26,
        question: "Выберите правильную форму: Loro ___ molto. (Они много работают.)",
        options: [
            "lavora",
            "lavori",
            "lavorano",
            "lavoro"
        ],
        correctIndex: 2,
        explanation: "Правильно! Глагол 'lavorare' в форме третьего лица множественного числа — 'lavorano'."
    },
    {
        id: 27,
        question: "Как сказать 'извините' (чтобы привлечь внимание)?",
        options: [
            "Permesso",
            "Scusi",
            "Mi dispiace",
            "Prego"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Scusi' (вежливая форма) используется, чтобы привлечь внимание или извиниться. 'Permesso' — разрешите пройти, 'Mi dispiace' — мне жаль, 'Prego' — пожалуйста."
    },
    {
        id: 28,
        question: "Выберите правильный артикль: ___ acqua (вода)",
        options: [
            "Il",
            "La",
            "Lo",
            "I"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'L'acqua' (с апострофом) — определённый артикль женского рода перед гласной. 'Acqua' — женского рода."
    },
    {
        id: 29,
        question: "Что означает 'simpatico'?",
        options: [
            "Простой",
            "Симпатичный, приятный человек",
            "Глупый",
            "Сложный"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Simpatico' означает приятный, симпатичный (о человеке). Это false friend — в русском 'симпатичный' чаще относится к внешности."
    },
    {
        id: 30,
        question: "Как сказать 'где находится вокзал?'",
        options: [
            "Che ore sono?",
            "Dov'è la stazione?",
            "Quanto costa?",
            "Come si chiama?"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Dov'è la stazione?' — где находится вокзал? 'Dov'è' — сокращение от 'Dove è'."
    },
    {
        id: 31,
        question: "Выберите правильную форму: Io ___ sempre presto. (Я всегда встаю рано.)",
        options: [
            "alzarsi",
            "mi alzo",
            "alzo",
            "alzare"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Mi alzo' — возвратная форма глагола 'alzarsi' (вставать) для первого лица единственного числа."
    },
    {
        id: 32,
        question: "Как будет 'неделя' по-итальянски?",
        options: [
            "Mese",
            "Anno",
            "Giorno",
            "Settimana"
        ],
        correctIndex: 3,
        explanation: "Правильно! 'Settimana' означает неделя. 'Mese' — месяц, 'Anno' — год, 'Giorno' — день."
    },
    {
        id: 33,
        question: "Что означает выражение 'che pizza!'?",
        options: [
            "Какая вкусная пицца!",
            "Как скучно!",
            "Я голоден",
            "Приятного аппетита"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Che pizza!' — разговорное выражение, означающее 'какая скука!' или 'какая неприятность!'."
    },
    {
        id: 34,
        question: "Выберите правильную форму будущего времени: Domani io ___ a Roma. (Завтра я поеду в Рим.)",
        options: [
            "vado",
            "andrò",
            "andrei",
            "andato"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Andrò' — форма будущего времени глагола 'andare' (идти, ехать) для первого лица единственного числа."
    },
    {
        id: 35,
        question: "Как сказать 'приятно познакомиться'?",
        options: [
            "Arrivederci",
            "Buongiorno",
            "Piacere",
            "Grazie"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Piacere' означает 'приятно познакомиться'. 'Arrivederci' — до свидания, 'Buongiorno' — добрый день, 'Grazie' — спасибо."
    },
    {
        id: 36,
        question: "Выберите правильную форму: Tu ___ bella. (Ты красивая.)",
        options: [
            "sei",
            "è",
            "sono",
            "siamo"
        ],
        correctIndex: 0,
        explanation: "Правильно! Глагол 'essere' (быть) во втором лице единственного числа — 'sei'. Согласование: 'bella' (женский род)."
    },
    {
        id: 37,
        question: "Как будет 'воздух' по-итальянски?",
        options: [
            "Acqua",
            "Terra",
            "Aria",
            "Fuoco"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Aria' означает воздух. 'Acqua' — вода, 'Terra' — земля, 'Fuoco' — огонь."
    },
    {
        id: 38,
        question: "Что означает 'camera' в итальянском?",
        options: [
            "Фотоаппарат",
            "Комната",
            "Камера (тюремная)",
            "Телевизор"
        ],
        correctIndex: 1,
        explanation: "Правильно! 'Camera' в итальянском означает комната. Это false friend — в английском 'camera' означает фотоаппарат."
    },
    {
        id: 39,
        question: "Как сказать 'я должен'?",
        options: [
            "Io posso",
            "Io voglio",
            "Io devo",
            "Io so"
        ],
        correctIndex: 2,
        explanation: "Правильно! 'Devo' — форма глагола 'dovere' (должен) для первого лица. 'Posso' — могу, 'Voglio' — хочу, 'So' — знаю."
    },
    {
        id: 40,
        question: "Выберите правильный вариант: Questo è ___ libro interessante. (Это интересная книга.)",
        options: [
            "un",
            "uno",
            "una",
            "un'"
        ],
        correctIndex: 0,
        explanation: "Правильно! 'Un libro' — неопределённый артикль мужского рода. 'Libro' — мужского рода, начинается с согласной."
    }
];

// Game State
let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let userAnswers = [];

// DOM Elements
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionElement = document.getElementById('current-question');
const scoreElement = document.getElementById('score');
const progressFill = document.getElementById('progress-fill');
const finalScoreElement = document.getElementById('final-score');
const percentElement = document.getElementById('percent');
const levelTextElement = document.getElementById('level-text');
const levelDescriptionElement = document.getElementById('level-description');
const explanationSummaryElement = document.getElementById('explanation-summary');
const resultCircle = document.getElementById('result-circle');
const confettiCanvas = document.getElementById('confetti-canvas');

// Utility Functions
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function shuffleOptions(question) {
    const options = [...question.options];
    const correctAnswer = options[question.correctIndex];
    
    // Shuffle all options
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Find new index of correct answer
    const newCorrectIndex = options.indexOf(correctAnswer);
    
    return {
        shuffledOptions: options,
        correctIndex: newCorrectIndex
    };
}

// Game Functions
function initGame() {
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Shuffle questions
    shuffledQuestions = shuffleArray(quizQuestions).map(question => {
        const shuffled = shuffleOptions(question);
        return {
            ...question,
            options: shuffled.shuffledOptions,
            correctIndex: shuffled.correctIndex
        };
    });
    
    // Update UI
    updateScore();
    showQuestion();
    updateProgress();
    
    // Switch to quiz screen
    switchScreen('quiz');
}

function showQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }
    
    const question = shuffledQuestions[currentQuestionIndex];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Update question counter
    currentQuestionElement.textContent = currentQuestionIndex + 1;
    
    // Clear previous options
    optionsContainer.innerHTML = '';
    
    // Create option elements
    const labels = ['A', 'B', 'C', 'D'];
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.className = 'option';
        optionElement.setAttribute('data-index', index);
        optionElement.setAttribute('role', 'radio');
        optionElement.setAttribute('aria-checked', 'false');
        optionElement.tabIndex = 0;
        
        optionElement.innerHTML = `
            <span class="option-label">${labels[index]}</span>
            <span class="option-text">${option}</span>
        `;
        
        optionElement.addEventListener('click', () => selectOption(index));
        optionElement.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                selectOption(index);
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    // Reset next button
    nextBtn.disabled = true;
    nextBtn.textContent = 'Далее →';
    
    // Clear any feedback
    const existingFeedback = document.querySelector('.feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
}

function selectOption(selectedIndex) {
    const question = shuffledQuestions[currentQuestionIndex];
    const optionElements = document.querySelectorAll('.option');
    
    // Disable all options
    optionElements.forEach(el => {
        el.disabled = true;
        el.setAttribute('aria-checked', 'false');
    });
    
    // Mark selected option
    const selectedElement = optionElements[selectedIndex];
    selectedElement.classList.add('selected');
    selectedElement.setAttribute('aria-checked', 'true');
    
    // Check if correct
    const isCorrect = selectedIndex === question.correctIndex;
    
    if (isCorrect) {
        score++;
        updateScore();
        selectedElement.classList.add('correct');
    } else {
        selectedElement.classList.add('incorrect');
        
        // Highlight correct answer
        const correctElement = optionElements[question.correctIndex];
        correctElement.classList.add('correct');
    }
    
    // Store user answer for summary
    userAnswers.push({
        question: question.question,
        userAnswer: question.options[selectedIndex],
        correctAnswer: question.options[question.correctIndex],
        isCorrect,
        explanation: question.explanation
    });
    
    // Show feedback
    showFeedback(isCorrect, question.explanation);
    
    // Enable next button
    nextBtn.disabled = false;
}

function showFeedback(isCorrect, explanation) {
    const feedback = document.createElement('div');
    feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.innerHTML = `
        <div class="feedback-title">
            ${isCorrect ? 'Правильно!' : 'Неправильно!'}
        </div>
        <div class="feedback-explanation">
            ${explanation}
        </div>
    `;
    
    // Insert after options container
    optionsContainer.parentNode.insertBefore(feedback, optionsContainer.nextSibling);
}

function nextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < shuffledQuestions.length) {
        showQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // Update result elements
    finalScoreElement.textContent = score;
    percentElement.textContent = percentage;
    
    // Determine level
    let level, description;
    if (percentage >= 90) {
        level = "Эксперт";
        description = "Отличное знание итальянского! Вы можете свободно общаться на большинство тем.";
    } else if (percentage >= 70) {
        level = "Продвинутый";
        description = "Хорошие знания! Некоторые детали можно улучшить, но в целом вы уверенно владеете языком.";
    } else if (percentage >= 50) {
        level = "Средний";
        description = "Неплохой результат! База есть, но нужно больше практики и изучения грамматики.";
    } else if (percentage >= 30) {
        level = "Начинающий";
        description = "Основы усвоены. Продолжайте учить новые слова и практиковать грамматику.";
    } else {
        level = "Начальный";
        description = "Вы только начинаете свой путь в изучении итальянского. Не сдавайтесь!";
    }
    
    levelTextElement.textContent = level;
    levelDescriptionElement.textContent = description;
    
    // Animate progress circle
    const circumference = 2 * Math.PI * 54;
    const offset = circumference - (percentage / 100) * circumference;
    resultCircle.style.strokeDashoffset = offset;
    
    // Show explanation summary
    showExplanationSummary();
    
    // Switch to result screen
    switchScreen('result');
    
    // Trigger confetti if score is high
    if (percentage >= 80) {
        triggerConfetti();
    }
}

function showExplanationSummary() {
    explanationSummaryElement.innerHTML = '';
    
    // Show only incorrect answers
    const incorrectAnswers = userAnswers.filter(answer => !answer.isCorrect);
    
    if (incorrectAnswers.length === 0) {
        const message = document.createElement('p');
        message.textContent = 'Все ваши ответы были правильными! Отличный результат!';
        explanationSummaryElement.appendChild(message);
        return;
    }
    
    const title = document.createElement('h3');
    title.textContent = 'Ответы, которые стоит повторить:';
    explanationSummaryElement.appendChild(title);
    
    incorrectAnswers.forEach((answer, index) => {
        const item = document.createElement('div');
        item.className = 'summary-item';
        item.innerHTML = `
            <div class="summary-question">${index + 1}. ${answer.question}</div>
            <div class="summary-explanation">Ваш ответ: ${answer.userAnswer}<br>
            Правильный ответ: ${answer.correctAnswer}<br>
            ${answer.explanation}</div>
        `;
        explanationSummaryElement.appendChild(item);
    });
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function updateScore() {
    scoreElement.textContent = score;
}

function switchScreen(screenName) {
    // Hide all screens
    startScreen.classList.remove('active');
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    
    // Show requested screen
    if (screenName === 'start') {
        startScreen.classList.add('active');
    } else if (screenName === 'quiz') {
        quizScreen.classList.add('active');
        // Focus on first option for accessibility
        setTimeout(() => {
            const firstOption = document.querySelector('.option');
            if (firstOption) firstOption.focus();
        }, 100);
    } else if (screenName === 'result') {
        resultScreen.classList.add('active');
        // Focus on restart button for accessibility
        setTimeout(() => {
            restartBtn.focus();
        }, 100);
    }
}

// Confetti Animation
function triggerConfetti() {
    const ctx = confettiCanvas.getContext('2d');
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * confettiCanvas.width,
            y: Math.random() * confettiCanvas.height - confettiCanvas.height,
            size: Math.random() * 10 + 5,
            speedX: Math.random() * 3 - 1.5,
            speedY: Math.random() * 3 + 2,
            color: `hsl(${Math.random() * 360}, 100%, 60%)`,
            shape: Math.random() > 0.5 ? 'circle' : 'rect'
        });
    }
    
    // Animation function
    function animateConfetti() {
        ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
        
        let particlesAlive = 0;
        
        particles.forEach(particle => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Add gravity
            particle.speedY += 0.05;
            
            // Draw particle
            ctx.fillStyle = particle.color;
            
            if (particle.shape === 'circle') {
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillRect(particle.x, particle.y, particle.size, particle.size * 1.5);
            }
            
            // Rotate rectangular particles
            if (particle.shape === 'rect') {
                ctx.save();
                ctx.translate(particle.x, particle.y);
                ctx.rotate(particle.y * 0.01);
                ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size * 1.5);
                ctx.restore();
            }
            
            // Check if particle is still visible
            if (particle.y < confettiCanvas.height) {
                particlesAlive++;
            }
        });
        
        if (particlesAlive > 0) {
            requestAnimationFrame(animateConfetti);
        } else {
            // Clear canvas after animation
            setTimeout(() => {
                ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
            }, 1000);
        }
    }
    
    // Start animation
    animateConfetti();
}

// Event Listeners
startBtn.addEventListener('click', initGame);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', () => {
    initGame();
});

// Keyboard Navigation for Quiz
document.addEventListener('keydown', (e) => {
    const activeScreen = document.querySelector('.screen.active');
    
    if (activeScreen === quizScreen && !nextBtn.disabled) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            nextQuestion();
        }
    }
    
    // Number keys 1-4 for answer selection
    if (activeScreen === quizScreen && e.key >= '1' && e.key <= '4') {
        const index = parseInt(e.key) - 1;
        const option = document.querySelectorAll('.option')[index];
        if (option && !option.disabled) {
            option.click();
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    if (confettiCanvas) {
        confettiCanvas.width = window.innerWidth;
        confettiCanvas.height = window.innerHeight;
    }
});

// Initialize
switchScreen('start');
