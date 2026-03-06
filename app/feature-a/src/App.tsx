import { SharedButton, SharedCard } from '@repo/ui';

export const App = () => {
  return (
    <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
      <h4 className="text-lg font-bold text-blue-800 mb-2">Test Component A</h4>
      <p className="text-blue-600 mb-4">
        This component is dynamically loaded from Feature A via Module Federation. It includes its own localized styles and imports from the shared UI library. Now rewritten in React and TypeScript!
      </p>

      <SharedCard title="Card inside Feature A">
        <SharedButton onClick={() => alert('Action A from Feature A clicked!')}>
          Action A
        </SharedButton>
      </SharedCard>
    </div>
  );
};

export default App;
