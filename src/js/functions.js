export function showAlert() {
    alert('Já que você é curioso abra o console');
    console.log('Essas alterações dentro da página estão sendo feitas por meio do JavaScript com o método `setInterval()`');
}

export function onShowMsg() {
    const msg = document.getElementById('msg');
    msg.hidden = false;

    showAlert();

    const milliseconds = 2 * 1000;
    setInterval(() => {
        msg.innerText += "\n#SouByte"
    }, milliseconds);
}
