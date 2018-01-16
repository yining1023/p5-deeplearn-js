/*
===
Fast Style Transfer Simple Example
===
*/

let net;
let inputImg;
let processedInputImg;
let outputImg;

function setup() {
  noCanvas();

  net = new p5ml.TransformNet('udnie', 'models/udnie/');
  net.setStyle('udnie');
  console.log('net: ', net);

  inputImg = document.querySelector('#input-img');
  inputImg.src = 'images/stata.jpg';
  inputImg.style.height = '250';
  inputImg.style.width = '250';
  console.log('inputImg: ', inputImg);

  outputImg = net.predict(inputImg);
  console.log('outputImg: ', outputImg);
}
