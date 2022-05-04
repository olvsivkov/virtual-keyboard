document.body.insertAdjacentHTML("afterbegin",
    `<div class="keyboard-wrapper">
    <div class="title-border"></div>
    <div class="screen border">
        <input class="userScreen" type="text" autofocus>
    </div>
    <div class="keyboard border">
        <div class="row1 border">
            <div class="border">
                <p class="letter">\`</p>
            </div>
            <div class="border">
                <p class="letter">1</p>
            </div>
            <div class="border">
                <p class="letter">2</p>
            </div>
            <div class="border">
                <p class="letter">3</p>
            </div>
            <div class="border">
                <p class="letter">4</p>
            </div>
            <div class="border">
                <p class="letter">5</p>
            </div>
            <div class="border">
                <p class="letter">6</p>
            </div>
            <div class="border">
                <p class="letter">7</p>
            </div>
            <div class="border">
                <p class="letter">8</p>
            </div>
            <div class="border">
                <p class="letter">9</p>
            </div>
            <div class="border">
                <p class="letter">0</p>
            </div>
            <div class="border">
                <p class="letter">-</p>
            </div>
            <div class="border">
                <p class="letter">=</p>
            </div>
            <div class="border">
                <p class="letter">Backspace</p>
            </div>
        </div>
        <div class="row2 border">
            <div class="border">
                <p class="letter">Tab</p>
            </div>
            <div class="border">
                <p class="letter">q</p>
            </div>
            <div class="border">
                <p class="letter">w</p>
            </div>
            <div class="border">
                <p class="letter">e</p>
            </div>
            <div class="border">
                <p class="letter">r</p>
            </div>
            <div class="border">
                <p class="letter">t</p>
            </div>
            <div class="border">
                <p class="letter">y</p>
            </div>
            <div class="border">
                <p class="letter">u</p>
            </div>
            <div class="border">
                <p class="letter">i</p>
            </div>
            <div class="border">
                <p class="letter">o</p>
            </div>
            <div class="border">
                <p class="letter">p</p>
            </div>
            <div class="border">
                <p class="letter">[</p>
            </div>
            <div class="border">
                <p class="letter">]</p>
            </div>
            <div class="border">
                <p class="letter">\\</p>
            </div>
            <div class="border">
                <p class="letter">Del</p>
            </div>
        </div>
        <div class="row3 border">
            <div class="border">
                <p class="letter">CapsLock</p>
            </div>
            <div class="border">
                <p class="letter">a</p>
            </div>
            <div class="border">
                <p class="letter">s</p>
            </div>
            <div class="border">
                <p class="letter">d</p>
            </div>
            <div class="border">
                <p class="letter">f</p>
            </div>
            <div class="border">
                <p class="letter">g</p>
            </div>
            <div class="border">
                <p class="letter">h</p>
            </div>
            <div class="border">
                <p class="letter">j</p>
            </div>
            <div class="border">
                <p class="letter">k</p>
            </div>
            <div class="border">
                <p class="letter">l</p>
            </div>
            <div class="border">
                <p class="letter">;</p>
            </div>
            <div class="border">
                <p class="letter">'</p>
            </div>
            <div class="border">
                <p class="letter">Enter</p>
            </div>
        </div>
        <div class="row4 border">
            <div class="border">
                <p class="letter">Shift</p>
            </div>
            <div class="border">
                <p class="letter">z</p>
            </div>
            <div class="border">
                <p class="letter">x</p>
            </div>
            <div class="border">
                <p class="letter">c</p>
            </div>
            <div class="border">
                <p class="letter">v</p>
            </div>
            <div class="border">
                <p class="letter">b</p>
            </div>
            <div class="border">
                <p class="letter">n</p>
            </div>
            <div class="border">
                <p class="letter">m</p>
            </div>
            <div class="border">
                <p class="letter">,</p>
            </div>
            <div class="border">
                <p class="letter">.</p>
            </div>
            <div class="border">
                <p class="letter">//</p>
            </div>
            <div class="border">
                <p class="letter">&#9650</p>
            </div>
            <div class="border">
                <p class="letter">Shift</p>
            </div>
        </div>
        <div class="row5 border">
            <div class="border">
                <p class="letter">Ctrl</p>
            </div>
            <div class="border">
                <p class="letter">Win</p>
            </div>
            <div class="border">
                <p class="letter">Alt</p>
            </div>
            <div class="border">
                <p class="letter">Space</p>
            </div>
            <div class="border">
                <p class="letter">Alt</p>
            </div>
            <div class="border">
                <p class="letter">&#9664</p>
            </div>
            <div class="border">
                <p class="letter">&#9660</p>
            </div>
            <div class="border">
                <p class="letter">&#9654</p>
            </div>
            <div class="border">
                <p class="letter">Ctrl</p>
            </div>
        </div>
    </div>
    <div class="comments border"></div>
  </div>`);

// ввод с клавиатуры
let expression = ""
const userScreen = document.querySelector(".userScreen");
const letter = document.querySelectorAll(".letter")

function handler(event) {
    expression = event.key
    if ([].includes(event.key)) {
        event.preventDefault();
    }

    function lookLetter() {
        for (let i = 0; i < letter.length; i += 1) {
            if (expression === letter[i].innerHTML) {
                letter[i].classList.add('animation')
                setTimeout(() => { letter[i].classList.remove('animation') }, 100);

                console.log(expression)
                console.log(letter[i])
            }
        }
    }
    lookLetter()

}
userScreen.addEventListener('keydown', handler);