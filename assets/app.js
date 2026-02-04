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
        correctIndex
