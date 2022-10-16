const persons = ["Ivan Petrov", "Petya Sidorov", "Oleg Ivanov"];

persons.shift();

console.log(persons);

persons.push("Ivan Petrov", "Dima Tikhonov");

console.log(persons);

let lastElem = persons.pop();

console.log(persons);

persons.unshift(lastElem);

console.log(persons);