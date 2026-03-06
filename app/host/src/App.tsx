import React, { useState, Suspense } from 'react';
import { SharedButton, SharedCard } from '@repo/ui';

// Lazy load federated modules
const RemoteFeatureA = React.lazy(() => import('featureA/TestComponentA'));
const RemoteFeatureB = React.lazy(() => import('featureB/TestComponentB'));

export const App: React.FC = () => {
  const [enableFeatureA, setEnableFeatureA] = useState(() => localStorage.getItem('ff_enableFeatureA') === 'true');
  const [enableFeatureB, setEnableFeatureB] = useState(() => localStorage.getItem('ff_enableFeatureB') === 'true');

  const toggleFeature = (feature: 'A' | 'B') => {
    if (feature === 'A') {
      const newVal = !enableFeatureA;
      setEnableFeatureA(newVal);
      localStorage.setItem('ff_enableFeatureA', String(newVal));
    } else {
      const newVal = !enableFeatureB;
      setEnableFeatureB(newVal);
      localStorage.setItem('ff_enableFeatureB', String(newVal));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center mb-8">
        <h1 className="text-2xl font-extrabold text-blue-900">Micro Frontend Dashboard</h1>
        <SharedButton onClick={() => alert('Host Action clicked!')}>Host Action</SharedButton>
      </header>

      <div className="max-w-7xl mx-auto px-6 mb-8 flex gap-4">
        <SharedButton
          className={!enableFeatureA ? 'bg-gray-400 hover:bg-gray-500' : ''}
          onClick={() => toggleFeature('A')}
        >
          Toggle Feature A ({enableFeatureA ? 'ON' : 'OFF'})
        </SharedButton>
        <SharedButton
          className={!enableFeatureB ? 'bg-gray-400 hover:bg-gray-500' : ''}
          onClick={() => toggleFeature('B')}
        >
          Toggle Feature B ({enableFeatureB ? 'ON' : 'OFF'})
        </SharedButton>
      </div>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <section>
          {enableFeatureA ? (
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading Feature A...</div>}>
              <RemoteFeatureA />
            </Suspense>
          ) : (
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 bg-gray-50 h-[200px]">
              Feature A is disabled via toggle.
            </div>
          )}
        </section>

        <section>
          {enableFeatureB ? (
            <Suspense fallback={<div className="p-8 text-center text-gray-500">Loading Feature B...</div>}>
              <RemoteFeatureB />
            </Suspense>
          ) : (
            <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-500 bg-gray-50 h-[200px]">
              Feature B is disabled via toggle.
            </div>
          )}
        </section>

        <section className="md:col-span-2 mt-8">
          <SharedCard title="Host App Native Component">
            <p className="text-gray-600 mb-4">
              This card is rendered directly by the Host application using the shared @repo/ui package. React rewrite complete.
            </p>
            <SharedButton onClick={() => alert('Info modal from host!')}>More Info</SharedButton>
          </SharedCard>
        </section>
      </main>
    </div>
  );
};

export default App;
