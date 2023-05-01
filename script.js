
//const keyboard = [];
const keyboard =[96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61, 8,
    9, 113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92, 
    20, 97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13, 
    16, 122, 120, 99, 118, 98, 110, 109, 44, 46, 47, 16,
    17, 91, 18, 13, 18, 17, 37, 38, 39, 40];
/*document.onkeypress = function(event) {
    keyboard.push(event.charCode);
    console.log(keyboard);
}*/

function init(){
    let out = '';
    for (let i = 0; i < keyboard.length; i++){
        if (i == 14 || i == 28 || i == 41 || i == 53){ 
            out += '<div class="clear"></div>';
        } // перенос строки очисткой потока благодаря проверке клавиш по счету
        out +='<div class="k-key" data="' + keyboard[i] + '">' + String.fromCharCode(keyboard[i])+'</div>';
    }
    document.querySelector('#keyboard').innerHTML = out;
}
init();

document.onkeypress = function (event) {
    console.log(event.code); //keyA
    console.log(event.keyCode); //97
    document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
        element.classList.remove('active');
    });
    document.querySelector('#keyboard .k-key[data="' + event.keyCode + '"]').classList.add('active');   
}

document.querySelectorAll('#keyboard .k-key').forEach(function(element){
    element.onclick = function(event){ //нажатие по клику мышки
        document.querySelectorAll('#keyboard .k-key').forEach(function(element) {
            element.classList.remove('active');
        });
        let code = this.getAttribute('data');
        this.classList.add('active');
        console.log(code);
}
});

/*function SetMessage(m){
    let textarea = document.querySelector("textarea[data-name='input-textarea']");  
    textarea.value = 
};*/

const textarea = document.querySelector('.textarea');
for (let k of keyCode){
    k.onclick = function(){
        textarea.textContent += k.textContent;
    }
}