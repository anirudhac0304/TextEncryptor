const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,?!'_-&@#$%*()/:<>|+=";

//Encrypt Function
function encryptText(text, key){
    let encryptedText = "";

    for(let i = 0; i < text.length; i++){
        const textChar = text[i];
        const keyChar = key[i % key.length];

        const textIndex = alphabet.indexOf(textChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if(textIndex === -1){
            encryptedText += textChar;
        }
        else{
            const newIndex = (textIndex + keyIndex) % alphabet.length;
            encryptedText += alphabet[newIndex];
        }
    }

    return encryptedText;
}


// Decrypt Function
function decryptText(encryptedText, key) {
    let decryptedText = "";

    for (let i = 0; i < encryptedText.length; i++) {
        const encryptedChar = encryptedText[i];
        const keyChar = key[i % key.length];

        const encryptedIndex = alphabet.indexOf(encryptedChar);
        const keyIndex = alphabet.indexOf(keyChar);

        if (encryptedIndex === -1) {
            decryptedText += encryptedChar;
        } else {
            let newIndex = encryptedIndex - keyIndex;
            newIndex = (newIndex + alphabet.length) % alphabet.length;
            decryptedText += alphabet[newIndex];
        }
    }
    return decryptedText;
}


// Update result based on selected operation 
function updateResult(isEncrypting){
    const text = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    let result = "";

    if(isEncrypting){
        result = encryptText(text, key);
    }
    else{
        result = decryptText(text, key);
    }

    document.getElementById("result").textContent = result;
}

//Add event listeners in buttons
document.getElementById("enc-btn").addEventListener('click', function (){
    updateResult(true);
});

document.getElementById("dec-btn").addEventListener('click', function (){
    updateResult(false);
});

// Initializing the result with encrypted text when page loads
document.addEventListener('DOMContentLoaded', () =>{
    updateResult(true);
});