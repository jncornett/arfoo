import _ from 'lodash';
import './style.css';

console.log('loaded entry point');

function component() {
  var element = document.createElement('h1');
  element.innerHTML = _.join(['Hello', 'friend'], ' ');
  return element;
}

document.body.appendChild(component());
