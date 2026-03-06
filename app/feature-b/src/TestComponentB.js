import { createSharedCard, createSharedButton } from '@repo/ui';

export function createTestComponentB() {
  const container = document.createElement('div');
  container.className = 'p-4 bg-emerald-50 border border-emerald-200 rounded-lg shadow-sm mt-4';
  
  const title = document.createElement('h4');
  title.className = 'text-lg font-bold text-emerald-800 mb-2';
  title.textContent = 'Test Component B';
  
  const content = document.createElement('p');
  content.className = 'text-emerald-700 mb-4';
  content.textContent = 'This component arrives dynamically from Feature B. It shows how we can seamlessly compose multiple micro frontends using Vite and Module Federation.';
  
  container.appendChild(title);
  container.appendChild(content);
  
  const buttonContainer = document.createElement('div');
  const actionBtn = createSharedButton('Action B', () => alert('Action B from Feature B fired.'));
  buttonContainer.appendChild(actionBtn);
  
  const card = createSharedCard('Analytics Overview (Feature B)', buttonContainer);
  container.appendChild(card);
  
  return container;
}
