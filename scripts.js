// idk man
let lainlove = 0;
const aishite = document.getElementById("amelove")
const display = document.getElementById("love")
function loveAme() {
   display.textContent = lainlove;
   localStorage.getItem('total', lainlove)
}

aishite.addEventListener('click', () => {
    lainlove++;
    loveAme();
});

loveAme();