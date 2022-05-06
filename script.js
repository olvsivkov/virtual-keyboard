document.body.insertAdjacentHTML("afterbegin",
    `<div class="keyboard-wrapper">
    <div class="title-border"></div>
    <div class="screen border">
        <input class="userScreen" type="text" autofocus>
    </div>
    <div class="keyboard border">
        <div class="row1 border">
            <div class="border">
                <p class="letter cursor-touch">\`</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">1</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">2</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">3</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">4</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">5</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">6</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">7</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">8</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">9</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">0</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">-</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">=</p>
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
                <p class="letter cursor-touch">q</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">w</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">e</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">r</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">t</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">y</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">u</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">i</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">o</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">p</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">[</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">]</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">\\</p>
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
                <p class="letter cursor-touch">a</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">s</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">d</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">f</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">g</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">h</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">j</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">k</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">l</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">;</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">'</p>
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
                <p class="letter cursor-touch">z</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">x</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">c</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">v</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">b</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">n</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">m</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">,</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">.</p>
            </div>
            <div class="border">
                <p class="letter cursor-touch">/</p>
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
                <p class="letter cursor-touch">   </p>
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

let words = ""
const userScreen = document.querySelector(".userScreen");
const letter = document.querySelectorAll(".letter")
const cursorTouch = document.querySelectorAll(".cursor-touch")
const keyboard = document.querySelector(".keyboard")



// вывод текста на экран с клавиатуры + подсветка клавиш.
function handler(event) {
    if ([].includes(event.key)) {
        event.preventDefault();
    }

    function lookLetter() {
        for (let i = 0; i < letter.length; i += 1) {
            if (event.key === letter[i].innerHTML) {
                letter[i].parentNode.classList.add('animation')
                setTimeout(() => { letter[i].parentNode.classList.remove('animation') }, 100);
            }
        }
    }
    lookLetter()
}
userScreen.addEventListener('keydown', handler);

// вывод текста на экран с виртуальной клавиатуры.


function clickOnKeyboard(event) {
    let target = event.target;

    words += target.innerHTML
    for (let i = 0; i < cursorTouch.length; i++) {
        if (target.innerHTML === cursorTouch[i].innerHTML) {
            userScreen.value = words
            cursorTouch[i].parentNode.classList.add('animation')
            setTimeout(() => { cursorTouch[i].parentNode.classList.remove('animation') }, 100);
        }
    }

}

keyboard.addEventListener("click", clickOnKeyboard);