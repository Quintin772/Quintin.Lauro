<button onclick="askQuestion('What\'s your favorite Geometry Dash level?')"> Quick question? </button>
<script src="script.js"></script>
<script>
function askQuestion(question) {
    alert(question);
}
function askQuestion(question) {
    let answer = prompt(question); 
    if (answer) {
        alert("Oh, " + answer + " I love that one!");
    }
}
