//<pre class="display"></pre>
document.body.insertAdjacentHTML("afterbegin",
    `<div class="keyboard_wrapper">
    <div class="display-wrapper">
        <textarea id="myAnchor" class="display" type="text" autofocus></textarea>
    </div>
    <div class="key">
        <div class="row">
            <span class="esc">
                Esc
            </span>
            <span data-key="1">1</span>
            <span data-key="2">2</span>
            <span data-key="3">3</span>
            <span data-key="4">4</span>
            <span data-key="5">5</span>
            <span data-key="6">6</span>
            <span data-key="7">7</span>
            <span data-key="8">8</span>
            <span data-key="9">9</span>
            <span data-key="0">0</span>
            <span data-key="-">-</span>
            <span data-key="=">=</span>
            <span class="backspace">
                Backspace
            </span>
        </div>
        <div class="row">
            <span class="tab">Tab</span>
            <span data-key="q">q</span>
            <span data-key="w">w</span>
            <span data-key="e">e</span>
            <span data-key="r">r</span>
            <span data-key="t">t</span>
            <span data-key="y">y</span>
            <span data-key="u">u</span>
            <span data-key="i">i</span>
            <span data-key="o">o</span>
            <span data-key="p">p</span>
            <span data-key="[">[</span>
            <span data-key="]">]</span>
            
        </div>
        <div class="row">
            <span class="caps">caps</span>
            <span data-key="a">a</span>
            <span data-key="s">s</span>
            <span data-key="d">d</span>
            <span data-key="f">f</span>
            <span data-key="g">g</span>
            <span data-key="h">h</span>
            <span data-key="j">j</span>
            <span data-key="k">k</span>
            <span data-key="l">l</span>
            <span data-key=";">;</span>
            <span data-key="'">'</span>
            <span class="enter">Enter</span>
        </div>
        <div class="row">
            <span class="shift">Shift</span>
            <span data-key="z">z</span>
            <span data-key="x">x</span>
            <span data-key="c">c</span>
            <span data-key="v">v</span>
            <span data-key="b">b</span>
            <span data-key="n">n</span>
            <span data-key="m">m</span>
            <span data-key=",">,</span>
            <span data-key=".">.</span>
            <span data-key="/">/</span>
            <span>&#9650</span>
            
        </div>
        <div class="row">
            <span class="ctrl">Ctlr</span>
            <span class="alt">Alt</span>
            <span class="space" data-key=" ">
                Space
            </span>
            <span>&#9664</span>
            <span>&#9660</span>
            <span>&#9654</span>
        </div>
    </div>
    <div> 
        <ul>Сделано на windows. Не реализовано:
            <li> Переключение языка клавиатуры </li>
            <li> По событию Click не работают стрелки, alt и shift </li>
        </ul>
    </div>
</div> `);


const keys = document.querySelectorAll('.keyboard_wrapper .key .row span'),
    keyPad = document.querySelector('.keyboard_wrapper .key'),
    display = document.querySelector('.display'),
    letter = document.querySelectorAll("span"),
    space = document.querySelector(".space"),
    backspace = document.querySelector(".backspace"),
    esc = document.querySelector(".esc"),
    enter = document.querySelector(".enter"),
    tab = document.querySelector(".tab")

let capsLockMode = false;
keys.forEach(key => {
    key.addEventListener('click', function() {
        if (key.classList.contains('caps')) {
            key.classList.toggle('active');
            keyPad.classList.toggle('uppercase');
            if (capsLockMode) capsLockMode = false
            else capsLockMode = true
        } else if (key.classList.contains('backspace')) {
            let str = display.value;
            display.value = str.substring(0, (str.length - 1));
        } else if (key.classList.contains('esc')) {
            display.value = ''
        } else if (key.classList.contains("enter")) {
            display.value += '\r\n'
        } else if (key.classList.contains("tab")) {
            display.value += '        '
        } else {
            if (capsLockMode) {
                display.value += key.dataset.key.toUpperCase();
            } else {
                display.value += key.dataset.key.toLowerCase();
            }
        }
    });



});

// "can try to fix coursor on textarea"



function handler(event) {
    let keyPress = event.key
    if (event.keyCode == 8) {
        let str = display.innerText;
        display.innerText = str.substring(0, (str.length - 1));
        backspace.classList.add('active')
        setTimeout(() => { backspace.classList.remove('active') }, 200);
    } else if (event.keyCode == 27) {
        display.value = ''
        esc.classList.add('active')
        setTimeout(() => { esc.classList.remove('active') }, 200);
    } else if (event.key === ' ') {
        space.classList.add('active')
        setTimeout(() => { space.classList.remove('active') }, 200);
    } else if (event.keyCode == 9) {
        display.value += '        ';

    } else {
        if (capsLockMode) {
            display.innerText += keyPress.toUpperCase();
        } else {
            display.innerText += keyPress.toLowerCase();
        }
    }



    function lookLetter() {
        for (let i = 0; i < letter.length; i += 1) {
            if (keyPress === letter[i].innerHTML) {
                letter[i].classList.add('active')
                setTimeout(() => { letter[i].classList.remove('active') }, 200);
            }
        }
    }
    lookLetter()


}
document.addEventListener('keydown', handler);