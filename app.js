let imgbox = document.getElementById("imgbox");
let QRimg = document.getElementById("QRimg");
let QRtext = document.getElementById("QRtext");

function generateQR() {
    console.log("clicked");
    if (QRtext.value.length > 0) {
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value;
        imgbox.classList.add("show-img");
    }else{
        QRtext.classList.add("error");
        setTimeout(()=>{
            QRtext.classList.remove("error");
        },1000);
    }



}