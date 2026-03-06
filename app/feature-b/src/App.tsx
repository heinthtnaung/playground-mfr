import { SharedButton, SharedCard } from '@repo/ui';

export const App = () => {
  return (
    <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg shadow-sm mt-4">
      <h4 className="text-lg font-bold text-emerald-800 mb-2">Test Component B</h4>
      <p className="text-emerald-700 mb-4">
        This component arrives dynamically from Feature B. It shows how we can seamlessly compose multiple micro frontends using Vite and Module Federation. It has now been rewritten in React and TypeScript.
      </p>

      <SharedCard title="Analytics Overview (Feature B)">
        <SharedButton onClick={() => alert('Action B from Feature B fired.')}>
          Action B
        </SharedButton>
      </SharedCard>
    </div>
  );
};

export default App;
