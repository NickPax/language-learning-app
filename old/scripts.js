const questions = [
    {
        type: 'matching',
        title: 'Matching (Einfach - Easy)',
        instructions: 'Match the German word to the English translation. Write the letter next to the German word.',
        words: [
            { de: 'Der Hund', en: 'a) Cat' },
            { de: 'Die Katze', en: 'b) Bird' },
            { de: 'Der Fisch', en: 'c) Hamster' },
            { de: 'Der Hamster', en: 'd) Dog' },
            { de: 'Der Vogel', en: 'e) Fish' }
        ]
    },
    {
        type: 'fill-in-the-blank',
        title: 'Fill in the Blank (Mittel - Medium)',
        instructions: 'Complete the sentences using the words from the box. (You may need to change the form - der/die/das).',
        wordsBox: ['Der Vogel', 'die Katze', 'der Hund', 'der Fisch', 'das Tier'],
        sentences: [
            { text: 'Ich habe _____ . Es ist braun und klein.', answer: 'die Katze' },
            { text: '_____ fliegt im Garten.', answer: 'Der Vogel' },
            { text: 'Mein Bruder hat _____. Er schwimmt im Aquarium.', answer: 'der Fisch' },
            { text: '____ bellt laut.', answer: 'der Hund' },
            { text: 'Das ist ein _____ .', answer: 'das Tier' }
        ]
    },
    // Add more questions here
];

function loadQuestion(index) {
    const question = questions[index];
    const main = document.querySelector('main');
    main.innerHTML = '';

    if (question.type === 'matching') {
        const h2 = document.createElement('h2');
        h2.textContent = question.title;
        main.appendChild(h2);

        const ul = document.createElement('ul');
        for (let i = 0; i < question.words.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = `<input type="text" placeholder="Write a letter here"> ${question.words[i].de} ______`;
            ul.appendChild(li);
        }
        main.appendChild(ul);

        const button = document.createElement('button');
        button.textContent = 'Submit';
        button.addEventListener('click', () => {
            // Check the answers
            alert('Check your answers!');
        });
        main.appendChild(button);
    } else if (question.type === 'fill-in-the-blank') {
        const h2 = document.createElement('h2');
        h2.textContent = question.title;
        main.appendChild(h2);

        const ul = document.createElement('ul');
        for (let i = 0; i < question.sentences.length; i++) {
            const li = document.createElement('li');
            li.innerHTML = `<input type="text" placeholder="Fill in the blank"> ${question.sentences[i].text}`;
            ul.appendChild(li);
        }
        main.appendChild(ul);

        const button = document.createElement('button');
        button.textContent = 'Submit';
        button.addEventListener('click', () => {
            // Check the answers
            alert('Check your answers!');
        });
        main.appendChild(button);
    }

    // Add more question types here
}

// Load the first question
loadQuestion(0);