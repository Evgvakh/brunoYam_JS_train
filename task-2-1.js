const movies = ['Dark Knight', 'Tenet', 'Interstellar', 'Inception', 'Dunkerque'];

const answers = [];

/* Configuring array of answers*/
for (let i = 0; i < movies.length; i++) {
let item = "";
let ans = confirm(`Have you ever watch the "${movies[i]}" movie?`);

if (ans) {
    item = 'yes';    
} else {
    item = 'no';     
}

answers.push(item);
}
/*____________________*/

/*Configuring a message to ouput*/
let message = "";

for (let i = 0; i < movies.length; i++) {
    message += `${i+1}. ${movies[i]}: ${answers[i]}\n`;
}
/*____________________*/

alert(message);