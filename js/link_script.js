const form = document.getElementById("form");
const qr = document.getElementById("qrcode");

function GenerateLinkQrBtn(e) {
  e.preventDefault();
  clearUI(qr);
  const url = document.getElementById("url").value;

  if (url === "") {
    alert("please Enter a valid URl");
  } else {
    showSpinner();
    setTimeout(() => {
      hideSpinner();
      GenerateLinkQrCode(url);
      setTimeout(() => {
        const saveURL = qr.querySelector("img").src;
        createSavebtn(saveURL, url);
      }, 50);
    }, 1000);
  }
}

function GenerateLinkQrCode(url) {
  const qrcode = new QRCode("qrcode", {
    text: url,
    width: 200,
    height: 200
  });
}

const createSavebtn = (saveURL, url) => {
  var downloadLink = document.createElement("a");
  downloadLink.id = "download-link";
  downloadLink.classList = "qr-btn-2";
  downloadLink.href = saveURL;
  downloadLink.download = `Url QRcode Image`;
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

form.addEventListener("submit", GenerateLinkQrBtn);
