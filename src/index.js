import cipher from './cipher.js';

/*-----OPEN/CLOSE OVERLAY-----*/
const screenOne = document.getElementById('front-layer1');
const overlayWindow = document.getElementById('overlay');
const flexible = document.getElementById('flex');
const closeOverlay = document.getElementById('close');

function openOverlayWindow() {
    overlayWindow.style.display = 'block';
}
function closeOverlayWindow (){
    overlayWindow.style.display = 'none';
}
function closeClickOut (e) {
    if(e.target == flexible) {
        overlayWindow.style.display = 'none';        
    }
} 

screenOne.addEventListener('click', openOverlayWindow);
closeOverlay.addEventListener('click', closeOverlayWindow);
flexible.addEventListener('click', closeClickOut);

/*-----SCREEN 1 <--> SCREEN 2*/
const startButton = document.getElementById('start');
const backLink1 = document.getElementById('back-link1');
const screenTwo = document.getElementById('front-layer2');
const eraseButton = document.getElementById('erase-btn');
const encodeButton = document.getElementById('encode-btn');
const decodeButton = document.getElementById('decode-btn');

function showScreenTwo() {
    backLink1.style.display = 'block';
    screenOne.style.display = 'none';
    startButton.style.display = 'none';
    screenTwo.style.display = 'block';
    eraseButton.style.display = 'block';
    encodeButton.style.display = 'block';
    decodeButton.style.display = 'block';
}
function hideScreenTwo() {
    backLink1.style.display = 'none';
    screenOne.style.display = 'block';
    startButton.style.display = 'block';
    screenTwo.style.display = 'none';
    eraseButton.style.display = 'none';
    encodeButton.style.display = 'none';
    decodeButton.style.display = 'none';    
}

startButton.addEventListener('click', showScreenTwo);
backLink1.addEventListener('click', hideScreenTwo);

/*-----CIPHER DATA-----*/
const inputOffset = document.getElementById('input-offset');
const inputTxt = document.getElementById('input-txt');
const newMsg = document.getElementById('new-msg');

/*-----SCREEN 2 <--> SCREEN 3*/
const backLink2 = document.getElementById('back-link2');
const screenThree = document.getElementById('front-layer3');
const copyButton = document.getElementById('copy-btn');

function showEncodeScreen() {
    backLink1.style.display = 'none';
    backLink2.style.display = 'block';
    screenTwo.style.display = 'none';
    eraseButton.style.display = 'none';
    encodeButton.style.display = 'none';
    decodeButton.style.display = 'none';
    screenThree.style.display = 'block';
    copyButton.style.display = 'block';
    const valueOffset = parseInt(inputOffset.value);
    let valueTxt = inputTxt.value;
    const encodeTxt = cipher.encode(valueOffset, valueTxt);
    valueTxt = valueTxt.replace(/ /g, "[sp]");
    valueTxt = valueTxt.replace(/\n/g, "[nl]");
    newMsg.value = encodeTxt;
    return false;
}
function showDecodeScreen() {
    backLink1.style.display = 'none';
    backLink2.style.display = 'block';
    screenTwo.style.display = 'none';
    eraseButton.style.display = 'none';
    encodeButton.style.display = 'none';
    decodeButton.style.display = 'none';
    screenThree.style.display = 'block';
    copyButton.style.display = 'block';
    const valueOffset = parseInt(inputOffset.value);
    let valueTxt = inputTxt.value;
    const decodeTxt = cipher.decode(valueOffset, valueTxt);
    valueTxt = valueTxt.replace(/ /g, "[sp]");
    valueTxt = valueTxt.replace(/\n/g, "[nl]");
    newMsg.value = decodeTxt;
    return false;
}
function hideScreenThree() {
    backLink1.style.display = 'block';
    backLink2.style.display = 'none';
    screenTwo.style.display = 'block';
    eraseButton.style.display = 'block';
    encodeButton.style.display = 'block';
    decodeButton.style.display = 'block';
    screenThree.style.display = 'none';
    copyButton.style.display = 'none';
}

encodeButton.addEventListener('click', showEncodeScreen);
decodeButton.addEventListener('click', showDecodeScreen);
backLink2.addEventListener('click',hideScreenThree);

/*-----COPY TEXT-----*/
function copyText() {
    newMsg.select();
    newMsg.setSelectionRange(0,99999);
    document.execCommand("copy");
    /*alert('Al compartir con alguien un mensaje cifrado, recuerda indicarle el link de Gaio y el offset que ingresaste :)');*/
    return newMsg.value
}

copyButton.addEventListener('click', copyText);

/*-----ERASE TEXT-----*/
function cleanInput() {
    inputTxt.value = '';
}

eraseButton.addEventListener('click',cleanInput);
