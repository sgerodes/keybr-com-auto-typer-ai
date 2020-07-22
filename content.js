console.log("Start:");

const space_char_regex = /␣/g;

// var script = document.createElement('script');
// script.src = 'jquery.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);
// console.log(script.src)

let get_char_array_for_inner_text = function(str){
    return str.replace(space_char_regex," ").split("")
}

function simulateKeyPress(character) {
    console.log("jquery pressing " + character)
    jQuery.event.trigger({ type : 'keypress', which : character.charCodeAt(0) });
}

let f = function(key){
    $(function() {
        $('body').keypress(function(e) {
            alert(e.which);
        });

        simulateKeyPress(key);
    });
}

let press_char_button = function(ch){
    var keyboardEvent = document.createEvent("KeyboardEvent");
    var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

    keyboardEvent[initMethod](
        "keydown", // event type: keydown, keyup, keypress
        true,      // bubbles
        true,      // cancelable
        window,    // view: should be window
        false,     // ctrlKey
        false,     // altKey
        false,     // shiftKey
        false,     // metaKey
        12,        // keyCode: unsigned long - the virtual key code, else 0
        0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    );
    document.dispatchEvent(keyboardEvent);
    //console.log(keyboardEvent);
    //console.log(keyboardEvent.key);
}


let press_char_button2 = function(ch){
    let keyboardEventInit = { "code": "Key" + ch};
    let keyboardEvent = new KeyboardEvent("press "+ ch, keyboardEventInit);
    document.dispatchEvent(keyboardEvent);
    //console.log(keyboardEvent);
    //console.log(keyboardEvent.key);
}

let wait = function(){
        setTimeout(presser, 2000);
}

let presser = function() {
    let text_box = document.getElementsByClassName("TextInput-fragment");
    let char_array = get_char_array_for_inner_text(text_box[0].innerText);
    for (let i = 0; i < 5; i++) {
        //console.log("Pressing '"+ char_array[i] + "'");
        simulateKeyPress(char_array[i]);
    }
}

wait();


console.log("Stop");