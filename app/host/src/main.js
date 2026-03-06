import './style.css';
import { createSharedCard, createSharedButton } from '@repo/ui';

// Import components from remotes
import { createTestComponentA } from 'featureA/TestComponentA';
import { createTestComponentB } from 'featureB/TestComponentB';

// Feature Toggle System
const FEATURE_FLAGS = {
  enableFeatureA: localStorage.getItem('ff_enableFeatureA') === 'true' || false,
  enableFeatureB: localStorage.getItem('ff_enableFeatureB') === 'true' || false,
};

function toggleFeature(flagName) {
  const currentValue = FEATURE_FLAGS[flagName];
  localStorage.setItem(`ff_${flagName}`, !currentValue);
  window.location.reload();
}

async function bootstrap() {
  const root = document.querySelector('#app');
  
  // Header
  const header = document.createElement('header');
  header.className = 'bg-white shadow-sm px-6 py-4 flex justify-between items-center mb-8';
  header.innerHTML = '<h1 class="text-2xl font-extrabold text-blue-900">Micro Frontend Dashboard</h1>';
  
  const headerActionBtn = createSharedButton('Host Action', () => alert('Host Action clicked!'));
  header.appendChild(headerActionBtn);
  root.appendChild(header);

  // Feature Toggle Controls
  const toggleContainer = document.createElement('div');
  toggleContainer.className = 'max-w-7xl mx-auto px-6 mb-8 flex gap-4';
  
  const toggleABtn = createSharedButton(`Toggle Feature A (${FEATURE_FLAGS.enableFeatureA ? 'ON' : 'OFF'})`, () => toggleFeature('enableFeatureA'));
  toggleABtn.classList.toggle('bg-gray-400', !FEATURE_FLAGS.enableFeatureA);
  
  const toggleBBtn = createSharedButton(`Toggle Feature B (${FEATURE_FLAGS.enableFeatureB ? 'ON' : 'OFF'})`, () => toggleFeature('enableFeatureB'));
  toggleBBtn.classList.toggle('bg-gray-400', !FEATURE_FLAGS.enableFeatureB);
  
  toggleContainer.appendChild(toggleABtn);
  toggleContainer.appendChild(toggleBBtn);
  root.appendChild(toggleContainer);

  // Main Container
  const mainContainer = document.createElement('main');
  mainContainer.className = 'max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8';
  
  // Left side - Feature A (Conditional)
  if (FEATURE_FLAGS.enableFeatureA) {
    const sectionA = document.createElement('section');
    sectionA.appendChild(createTestComponentA());
    mainContainer.appendChild(sectionA);
  } else {
    const placeholderA = document.createElement('div');
    placeholderA.className = 'p-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 bg-gray-50';
    placeholderA.textContent = 'Feature A is disabled via toggle.';
    mainContainer.appendChild(placeholderA);
  }

  // Right side - Feature B (Conditional)
  if (FEATURE_FLAGS.enableFeatureB) {
    const sectionB = document.createElement('section');
    sectionB.appendChild(createTestComponentB());
    mainContainer.appendChild(sectionB);
  } else {
    const placeholderB = document.createElement('div');
    placeholderB.className = 'p-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 bg-gray-50';
    placeholderB.textContent = 'Feature B is disabled via toggle.';
    mainContainer.appendChild(placeholderB);
  }
  
  // Shared UI elements directly in host
  const sharedUIContainer = document.createElement('section');
  sharedUIContainer.className = 'md:col-span-2 mt-8';
  
  const hostCardContent = document.createElement('p');
  hostCardContent.className = 'text-gray-600 mb-4';
  hostCardContent.textContent = 'This card is rendered directly by the Host application using the shared @repo/ui package.';
  
  const hostCardBtn = createSharedButton('More Info', () => alert('Info modal from host!'));
  const cardContainerElement = document.createElement('div');
  cardContainerElement.appendChild(hostCardContent);
  cardContainerElement.appendChild(hostCardBtn);
  
  const hostCard = createSharedCard('Host App Native Component', cardContainerElement);
  sharedUIContainer.appendChild(hostCard);
  
  mainContainer.appendChild(sharedUIContainer);

  root.appendChild(mainContainer);
}

bootstrap();
