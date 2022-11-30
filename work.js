const main = document.querySelector('main');
console.log (main);
const joke1 ="How do you open a banana? With a mon-key.";
const joke2 ="Which is faster, hot or cold? Hot, because you can catch cold.";
const joke3 ="What do you call a pig that does karate? A pork chop.";


main.innerHTML =`
<h1>My Jokes</h1>
<ul>
    <li>${joke1}</li>
    <li>${joke2}</li>
    <li>${joke3}</li>
</ul>`;

const h3 = document.createElement('h3');
h3.textContent = "That's All Folks";
main.appendChild(h3);