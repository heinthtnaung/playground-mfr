import { createSharedCard, createSharedButton } from '@repo/ui';

export function createTestComponentA() {
  const container = document.createElement('div');
  container.className = 'p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm';
  
  const title = document.createElement('h4');
  title.className = 'text-lg font-bold text-blue-800 mb-2';
  title.textContent = 'Test Component A';
  
  const content = document.createElement('p');
  content.className = 'text-blue-600 mb-4';
  content.textContent = 'This component is dynamically loaded from Feature A via Module Federation. It includes its own localized styles and imports from the shared UI library.';
  
  container.appendChild(title);
  container.appendChild(content);
  
  // Utilize shared UI component inside this feature component
  const buttonContainer = document.createElement('div');
  const actionBtn = createSharedButton('Action A', () => alert('Action A from Feature A clicked!'));
  buttonContainer.appendChild(actionBtn);
  
  const card = createSharedCard('Card inside Feature A', buttonContainer);
  container.appendChild(card);
  
  return container;
}
