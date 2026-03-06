import './style.css';
import { createTestComponentA } from './TestComponentA.js';

document.querySelector('#app').appendChild(
  createTestComponentA()
);
