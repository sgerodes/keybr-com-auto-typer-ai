console.log("Start:");

const space_char_regex = /␣/g;

let get_char_array_for_inner_text = function(str){
    return str.replace(space_char_regex," ").split("")
}

let press_char_button = function(char){
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
        40,        // keyCode: unsigned long - the virtual key code, else 0
        0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
    );
    document.dispatchEvent(keyboardEvent);
    //console.log(keyboardEvent);
    //console.log(keyboardEvent.key);
}

let press_char_button2 = function(char){

    let keyboardEventInit = { "code": "Key" + char};

    let keyboardEvent = new KeyboardEvent("press "+ char, keyboardEventInit);

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
        console.log("Pressing '"+ char_array[i] + "'");
        press_char_button2(char_array[i]);
    }
    console.log("Pressed");
}

wait();


console.log("Stop");