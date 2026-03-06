import './style.css';
import { createTestComponentB } from './TestComponentB.js';

document.querySelector('#app').appendChild(
  createTestComponentB()
);
