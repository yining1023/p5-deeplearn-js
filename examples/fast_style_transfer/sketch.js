/*
===
Fast Style Transfer Simple Example
===
*/

let net;
let inputImg;
let outputImg;

function setup() {
  createCanvas(252, 252);
  net = new p5ml.TransformNet(modelLoaded, 'udnie', 'models/udnie/');
}

// A function to be called when the model has been loaded
function modelLoaded() {
  console.log('Model loaded!');
  net.setStyle('udnie');
  console.log('net: ', net);

  inputImg = document.querySelector('#input-img');
  inputImg.src = 'images/stata.jpg';
  inputImg.style.height = '250';
  inputImg.style.width = '250';
  console.log('inputImg: ', inputImg);

  outputImgData = net.predict(inputImg);
  console.log('outputImgData: ', outputImgData);
  renderToCanvas(outputImgData);
}

function renderToCanvas(outputImgData) {
  const data = outputImgData.dataSync();
  console.log('data: ', data);
  // const [height, width, ] = a.shape;
  // const ctx = canvas.getContext('2d');
  // const imageData = new ImageData(width, height);
  // const data = a.dataSync();
  // for (let i = 0; i < height * width; ++i) {
  //   const j = i * 4;
  //   const k = i * 3;
  //   imageData.data[j + 0] = Math.round(255 * data[k + 0]);
  //   imageData.data[j + 1] = Math.round(255 * data[k + 1]);
  //   imageData.data[j + 2] = Math.round(255 * data[k + 2]);
  //   imageData.data[j + 3] = 255;
  // }
  // ctx.putImageData(imageData, 0, 0);
  let k = 0;
  for (var i = 0; i < width; i++) {
    for (var j = 0; j < height; j++) {
      k = (i + j * height) * 3;
      let r = Math.round(255 * data[k + 0]);
      let g = Math.round(255 * data[k + 1]);
      let b = Math.round(255 * data[k + 2]);
      var c = color(r, g, b);
      set(i, j, c);
    }
  }
  updatePixels();
}
