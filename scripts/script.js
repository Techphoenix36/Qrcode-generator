let imgBox = document.getElementById('imgBox'),
    qrImage = document.getElementById('qrImage'),
    qrText = document.getElementById('qrText');

function generateQR(){
    if(qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add('show-img');
        /*setTimeout(()=>{
            imgBox.classList.remove('show-img');
        },5000);*/
    }else {
        qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000);
    }
}


window.onload = function() {
    document.getElementById("download")
    .addEventListener("click",()=>{
        const page = this.document.querySelector(".container");
        html2pdf().from(page).save();
    })
}