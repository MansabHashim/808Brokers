import React from 'react';
import DashboardNav from '../components/Navigation/DashboardNav';

const Library = () => {
  return (
    <div className="min-h-screen flex">
      <DashboardNav />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-16 bg-gray-900/50 backdrop-blur-sm border-b border-gray-800 flex items-center justify-between px-6">
          <h1 className="text-xl font-light text-white">Library</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800/50">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
            <img src="/images/avatar.jpg" alt="Profile" className="w-8 h-8 rounded-full border border-gray-700" />
          </div>
        </header>

        {/* Main Content Scroll Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Playlists */}
          <section className="mb-8">
            <h2 className="text-xl font-medium text-white mb-4">Your Playlists</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Favorites', 'Recently Added', 'Top Beats', 'Inspiration'].map((playlist) => (
                <div key={playlist} className="bg-gray-900/30 rounded-lg p-4 hover:bg-gray-800/30 transition-colors cursor-pointer">
                  <div className="aspect-square bg-gray-800 rounded-lg mb-3"></div>
                  <h3 className="text-white font-medium">{playlist}</h3>
                  <p className="text-gray-400 text-sm">12 tracks</p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Activity */}
          <section>
            <h2 className="text-xl font-medium text-white mb-4">Recent Activity</h2>
            <div className="space-y-2">
              {[
                { name: 'Summer Vibes Beat', type: 'Added to playlist', time: '2h ago' },
                { name: 'Trap Soul Kit', type: 'Downloaded', time: '5h ago' },
                { name: 'Lo-Fi Collection', type: 'Created playlist', time: 'Yesterday' },
              ].map((activity) => (
                <div key={activity.name} className="flex items-center justify-between p-3 bg-gray-900/30 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-800 rounded"></div>
                    <div>
                      <p className="text-white">{activity.name}</p>
                      <p className="text-gray-400 text-sm">{activity.type}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 text-sm">{activity.time}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Library; 