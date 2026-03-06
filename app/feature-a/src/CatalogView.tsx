import React from 'react';
import { SharedButton, SharedCard } from '@repo/ui';

interface CatalogItem {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
}

const CATALOG_DATA: CatalogItem[] = [
  { id: 1, name: 'Premium Widget', description: 'High-quality widget for advanced use cases.', price: '$29.99', category: 'Widgets' },
  { id: 2, name: 'Basic Gadget', description: 'Reliable gadget for everyday tasks.', price: '$14.99', category: 'Gadgets' },
  { id: 3, name: 'Pro Toolkit', description: 'All-in-one professional toolkit bundle.', price: '$49.99', category: 'Bundles' },
  { id: 4, name: 'Starter Pack', description: 'Perfect for beginners getting started.', price: '$9.99', category: 'Bundles' },
  { id: 5, name: 'Smart Sensor', description: 'IoT-ready sensor with real-time data.', price: '$34.99', category: 'Gadgets' },
  { id: 6, name: 'Mini Widget', description: 'Compact widget for space-constrained setups.', price: '$19.99', category: 'Widgets' },
];

export const CatalogView: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState<string>('All');
  const categories = ['All', ...Array.from(new Set(CATALOG_DATA.map(item => item.category)))];

  const filteredItems = selectedCategory === 'All'
    ? CATALOG_DATA
    : CATALOG_DATA.filter(item => item.category === selectedCategory);

  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-blue-900 mb-4">📦 Product Catalog</h2>

      {/* Category Filters */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredItems.map(item => (
          <SharedCard key={item.id} title={item.name}>
            <p className="text-sm text-gray-500 mb-1">{item.category}</p>
            <p className="text-gray-600 mb-3">{item.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-blue-700">{item.price}</span>
              <SharedButton onClick={() => alert(`Added "${item.name}" to cart!`)}>
                Add to Cart
              </SharedButton>
            </div>
          </SharedCard>
        ))}
      </div>
    </div>
  );
};

export default CatalogView;
