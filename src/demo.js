import qrCode from 'qrcode-npm';

class Demo {
  constructor(args) 
  {
    this.input = document.querySelector('#url');
    this.form = document.querySelector('form');
    this.containerQR = document.querySelector('#container-qr');
    this.form.addEventListener('submit', this.onSubmit.bind(this));
  }

  onSubmit(e) 
  {
    e.preventDefault();

    let qr = qrCode.qrcode(7, "M");
    qr.addData(this.input.value);
    qr.make();
    let img = qr.createImgTag(8);

    this.containerQR.innerHTML = img;
  }


}

export default Demo;