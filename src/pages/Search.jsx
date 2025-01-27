import React, { useState } from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';

const Search = () => {
  const [searchFilters, setSearchFilters] = useState({
    type: 'all',
    bpm: '',
    key: '',
    genre: '',
  });

  const genres = ['Hip Hop', 'R&B', 'Trap', 'Lo-Fi', 'House', 'Pop', 'Jazz', 'Soul', 'Drill', 'Afrobeats'];
  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  return (
    <div className="min-h-screen flex">
      <DashboardNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-xl font-light text-white">Search</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search beats, artists, samples..."
                className="w-96 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500/50"
              />
              <svg className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="M21 21l-4.35-4.35"></path>
              </svg>
            </div>
            <img src="/images/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-gray-700" />
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Search Filters */}
          <section className="mb-8">
            <div className="flex space-x-4 mb-6">
              <button
                className={`px-4 py-2 rounded-lg ${
                  searchFilters.type === 'all' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                }`}
                onClick={() => setSearchFilters({ ...searchFilters, type: 'all' })}
              >
                All
              </button>
              {['Beats', 'Samples', 'Artists', 'Playlists'].map((type) => (
                <button
                  key={type}
                  className={`px-4 py-2 rounded-lg ${
                    searchFilters.type === type.toLowerCase()
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
                  }`}
                  onClick={() => setSearchFilters({ ...searchFilters, type: type.toLowerCase() })}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* BPM Range */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <label className="block text-gray-400 text-sm mb-2">BPM Range</label>
                <div className="flex space-x-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500"
                  />
                  <span className="text-gray-400 self-center">-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-500"
                  />
                </div>
              </div>

              {/* Key Selection */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <label className="block text-gray-400 text-sm mb-2">Key</label>
                <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white">
                  <option value="">Any Key</option>
                  {keys.map((key) => (
                    <option key={key} value={key}>{key}</option>
                  ))}
                </select>
              </div>

              {/* Genre Selection */}
              <div className="bg-gray-800/30 rounded-lg p-4">
                <label className="block text-gray-400 text-sm mb-2">Genre</label>
                <select className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white">
                  <option value="">Any Genre</option>
                  {genres.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                  ))}
                </select>
              </div>
            </div>
          </section>

          {/* Quick Filters */}
          <section className="mb-8">
            <h3 className="text-lg font-medium text-white mb-3">Quick Filters</h3>
            <div className="flex flex-wrap gap-2">
              {['Under 100 BPM', '100-120 BPM', '120-140 BPM', 'Over 140 BPM', 'Minor Key', 'Major Key', 'With Vocals', 'Instrumental'].map((filter) => (
                <button
                  key={filter}
                  className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-full hover:bg-gray-700/50 hover:text-white"
                >
                  {filter}
                </button>
              ))}
            </div>
          </section>

          {/* Recent Searches */}
          <section className="mb-8">
            <h2 className="text-xl font-medium text-white mb-4">Recent Searches</h2>
            <div className="space-y-2">
              {['trap beats 140bpm', 'lofi samples', 'drum kits', 'melody loops'].map((search) => (
                <div key={search} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg hover:bg-gray-800/30 transition-colors">
                  <div className="flex items-center space-x-3">
                    <svg className="h-4 w-4 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span className="text-gray-300">{search}</span>
                  </div>
                  <button className="text-gray-400 hover:text-white">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Searches */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Trending</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Hip Hop', 'R&B', 'Trap', 'Lo-Fi', 'House', 'Pop', 'Jazz', 'Soul'].map((genre) => (
                <div key={genre} className="bg-gray-900/30 rounded-lg p-4 hover:bg-gray-800/30 transition-colors cursor-pointer">
                  <h3 className="text-white font-medium">{genre}</h3>
                  <p className="text-gray-400 text-sm">Popular now</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Search; 