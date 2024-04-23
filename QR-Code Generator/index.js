let QR = document.querySelector('.QR-box');
let QRCode = document.querySelector('#QRCode');
let QRName = document.querySelector('#QRName');

function GenQR(){
    QRCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRName.value;
}