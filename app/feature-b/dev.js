import { spawn } from 'child_process';

function run(command, args) {
  const child = spawn(command, args, { stdio: 'inherit', shell: true });
  child.on('error', (err) => console.error(`Failed to start subprocess: ${err}`));
  return child;
}

console.log('Starting Vite build in watch mode...');
run('npx', ['vite', 'build', '--watch']);

console.log('Starting Vite preview server...');
setTimeout(() => {
  run('npx', ['vite', 'preview']);
}, 2000);
