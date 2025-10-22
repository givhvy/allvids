import { useState, useMemo } from 'react';
import DarkVeil from './components/DarkVeil';
import Header from './components/Header';
import Hero from './components/Hero';
import SearchFilter from './components/SearchFilter';
import PromptCard from './components/PromptCard';
import { promptsData, categories } from './data/prompts';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPrompts = useMemo(() => {
    let filtered = promptsData;

    // Filter by category
    if (activeFilter !== 'all') {
      filtered = filtered.filter(prompt => prompt.category === activeFilter);
    }

    // Filter by search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(prompt =>
        prompt.title.toLowerCase().includes(search) ||
        prompt.description.toLowerCase().includes(search) ||
        prompt.categoryLabel.toLowerCase().includes(search)
      );
    }

    return filtered;
  }, [searchTerm, activeFilter]);

  return (
    <>
      <DarkVeil 
        hueShift={120}
        noiseIntensity={0.03}
        speed={0.3}
        warpAmount={0.2}
        resolutionScale={0.8}
      />
      
      <div className="app-content">
        <Header />
        <Hero />
        <SearchFilter
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeFilter={activeFilter}
          setActiveFilter={setActiveFilter}
          categories={categories}
        />
        
        <main className="main-content">
          <div className="container">
            {filteredPrompts.length > 0 ? (
              <div className="cards-grid">
                {filteredPrompts.map(prompt => (
                  <PromptCard key={prompt.id} prompt={prompt} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>Không tìm thấy kết quả</h3>
                <p>Thử tìm kiếm với từ khóa khác hoặc chọn danh mục khác</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;

