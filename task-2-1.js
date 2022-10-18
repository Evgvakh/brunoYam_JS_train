const movies = ['Dark Knight', 'Tenet', 'Interstellar', 'Inception', 'Dunkerque'];

const answers = [];

for (let i = 0; i < movies.length; i++) {    
    let ans = confirm(`Have you ever watch the "${movies[i]}" movie?`);    
    let item = ans ? 'yes' : 'no';

    answers.push(item);
}

let message = '';

for (let i = 0; i < movies.length; i++) {
    message += `${i+1}. ${movies[i]}: ${answers[i]}\n`;
}

alert(message);