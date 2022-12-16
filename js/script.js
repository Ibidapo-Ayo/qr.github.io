const form = document.getElementById("form");
const qr = document.getElementById("qrcode");

const GeneratedBtn = e => {
  e.preventDefault();
  clearUI(qr);
  const text = document.getElementById("text").value;

  if (text === "") {
    alert("Please enter a text");
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      generateQr(text);
      setTimeout(() => {
        const saveURL = qr.querySelector("img").src;
        createSavebtn(saveURL);
      }, 50);
    }, 1000);
  }
};

const generateQr = text => {
  const qrcode = new QRCode("qrcode", {
    text: text,
    width: 200,
    height: 200,
  });
};

const createSavebtn = (saveURL, text) => {
    var downloadLink = document.createElement("a");
    downloadLink.id = "download-link";
    downloadLink.classList = "qr-btn-2";
    downloadLink.href = saveURL;
    downloadLink.download = "qrcode";
    downloadLink.innerHTML = "Download";
    document.getElementById("qr-main-2").appendChild(downloadLink);
  };

const showSpinner = () => {
  document.getElementById("spinner").style.display = "block";
};
const hideSpinner = () => {
  document.getElementById("spinner").style.display = "none";
};

const clearUI = qr => {
  qr.innerHTML = "";
  const download_link = document.getElementById("download-link");

  if (download_link) {
    download_link.remove();
  }
};

hideSpinner();

form.addEventListener("submit", GeneratedBtn);
