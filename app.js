const brain = require('brain.js');

var net = new brain.NeuralNetwork();

net.train([
  {input: {r: 0.000, g: 0.000, b: 0.000}, output: {light: 1}},
  {input: {r: 1.000, g: 1.000, b: 1.000}, output: {dark: 1}},
  {input: {r: 0.500, g: 0.500, b: 0.500}, output: {light: 1}},
  {input: {r: 0.925, g: 0.232, b: 0.488}, output: {light: 1}},
  {input: {r: 0.228, g: 0.532, b: 0.964}, output: {light: 1}},
  {input: {r: 0.629, g: 0.860, b: 0.388}, output: {light: 1}},
  {input: {r: 0.640, g: 0.995, b: 0.797}, output: {light: 1}},
  {input: {r: 0.078, g: 0.157, b: 0.114}, output: {dark: 1}},
  {input: {r: 0.188, g: 0.165, b: 0.549}, output: {dark: 1}}
]);

function getRandomNumber(min, max) {
  return (Math.random() * max + min) / max;
}

function getRGB() {
  let r = getRandomNumber(0, 255);
  let g = getRandomNumber(0, 255);
  let b = getRandomNumber(0, 255);
  return { 'r': r, 'g': g, 'b':b };
}

let test = getRGB();
// console.log((test.r * 255) + ", " + (test.g * 255) + ", " + (test.b * 255));
// console.log(test);
var output = net.run(test);
console.log(output);
let result = '';
if(output.light > output.dark){
  result = "light";
}
else{
  result = "dark";
}
console.log(result);
