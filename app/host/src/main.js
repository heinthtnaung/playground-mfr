import './style.css';
import { createSharedCard, createSharedButton } from '@repo/ui';

// Import components from remotes
import { createTestComponentA } from 'featureA/TestComponentA';
import { createTestComponentB } from 'featureB/TestComponentB';

async function bootstrap() {
  const root = document.querySelector('#app');
  
  // Header
  const header = document.createElement('header');
  header.className = 'bg-white shadow-sm px-6 py-4 flex justify-between items-center mb-8';
  header.innerHTML = '<h1 class="text-2xl font-extrabold text-blue-900">Micro Frontend Dashboard</h1>';
  
  const headerActionBtn = createSharedButton('Host Action', () => alert('Host Action clicked!'));
  header.appendChild(headerActionBtn);
  root.appendChild(header);

  // Main Container
  const mainContainer = document.createElement('main');
  mainContainer.className = 'max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8';
  
  // Left side - Feature A
  const sectionA = document.createElement('section');
  sectionA.appendChild(createTestComponentA());
  mainContainer.appendChild(sectionA);

  // Right side - Feature B
  const sectionB = document.createElement('section');
  sectionB.appendChild(createTestComponentB());
  mainContainer.appendChild(sectionB);
  
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
