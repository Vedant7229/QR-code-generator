const qrFormEl = document.getElementById("qrForm");
const qrImgEl = document.getElementById("qrImg");
const qrContainerEl = document.getElementById("qrContainer");
const qrInputTextEl = document.getElementById("qrInputText");
const generateBtnEl = document.getElementById("generateBtn");


const renderQRCode = (url) => {
    if(!url) return;
    generateBtnEl.innerText = "Generating QR Code....";
    qrImgEl.src = url;
    qrContainerEl.classList.add("show");

    qrImgEl.addEventListener("load", () => {
        generateBtnEl.innerText = "Generate QR Code";
    });
};

qrFormEl.addEventListener("submit",(event)=> {
    event.preventDefault();

    const formData = new FormData(qrFormEl);
    const text = formData.get("qrText");
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
   

    renderQRCode(qrCodeUrl)
});
qrInputTextEl.addEventListener("keyup",()=> {

    if(!qrInputTextEl.value.trim()){
        qrContainerEl.classList.remove("show");
    }
});