export function createSharedButton(text, onClick) {
  const button = document.createElement('button');
  button.className = 'btn-primary flex items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-200';
  
  button.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
    </svg>
    <span>${text}</span>
  `;
  
  if (onClick) {
    button.addEventListener('click', onClick);
  }
  
  return button;
}

export function createSharedCard(title, contentElement) {
  const card = document.createElement('div');
  card.className = 'card p-6 transform hover:-translate-y-1 transition-transform duration-300';
  
  const header = document.createElement('h3');
  header.className = 'text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-100';
  header.textContent = title;
  
  card.appendChild(header);
  
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'text-gray-600';
  contentWrapper.appendChild(contentElement);
  
  card.appendChild(contentWrapper);
  
  return card;
}
