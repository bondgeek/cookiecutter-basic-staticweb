import _ from 'lodash';
import './assets/styles/main.css';

const component = () => {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack!!!!'], ' ');
  element.classList.add('hello');

  return element;
};

document.body.appendChild(component());
