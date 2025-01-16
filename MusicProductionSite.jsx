import React from 'react';
import { Search, Wallet, Mic2, Music, Waves, Share2, Download, ChevronRight } from 'lucide-react';

const MusicProductionSite = () => {
  const features = [
    {
      title: "Record",
      icon: <Mic2 className="h-6 w-6" />,
      description: "Professional-grade recording with noise cancellation"
    },
    {
      title: "Mix",
      icon: <Waves className="h-6 w-6" />,
      description: "Industry-standard mixing tools and effects"
    },
    {
      title: "Export",
      icon: <Share2 className="h-6 w-6" />,
      description: "Export in multiple formats with cloud backup"
    }
  ];

  const screenshots = [
    {
      title: "Recording Studio",
      description: "Professional recording interface with multi-track support and real-time effects",
      image: "recording",
      features: [
        "Multi-track recording",
        "Real-time monitoring",
        "Virtual instruments",
        "MIDI support"
      ]
    },
    {
      title: "Mixing Console",
      description: "Industry-standard mixing board with advanced audio processing",
      image: "mixing",
      features: [
        "32-channel mixer",
        "Pro effects library",
        "Automation tools",
        "VST plugin support"
      ]
    },
    {
      title: "Sound Library",
      description: "Extensive collection of samples, presets, and virtual instruments",
      image: "library",
      features: [
        "10,000+ samples",
        "500+ instruments",
        "Genre-specific presets",
        "Cloud sync"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      {/* Navigation */}
      <div className="bg-gray-900/50 backdrop-blur-lg border-b border-gray-800/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-blue-400" />
              <span className="text-xl text-white font-light tracking-wider">808<span className="font-medium">BROKERS</span></span>
            </div>
            <button className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 px-4 py-2 rounded-lg flex items-center space-x-2 text-sm font-light tracking-wider backdrop-blur-sm transition-all">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative">
        {/* Background Video/GIF */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Background Animation"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/95 via-gray-900/80 to-gray-950/90 backdrop-blur-sm"></div>
        </div>
        
        {/* Content */}
        <div className="relative container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h1 className="text-6xl font-extralight text-white tracking-tight leading-tight">
              Discover Your <span className="font-medium">Next Track</span>
            </h1>
            <p className="text-xl text-gray-400 font-light tracking-wide">
              Search through millions of samples, beats, and music production tools
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <input 
                type="text"
                placeholder="Search for samples, beats, or instruments..."
                className="w-full px-6 py-4 text-lg bg-gray-800/50 text-white border border-gray-700/50 rounded-lg focus:outline-none focus:border-blue-500/50 shadow-xl placeholder-gray-500 font-light backdrop-blur-sm"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500/20 text-blue-300 p-3 rounded-lg hover:bg-blue-500/30 transition-all backdrop-blur-sm">
                <Search className="h-5 w-5" />
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 font-light">
              <span className="text-gray-500">Popular:</span>
              <a href="#" className="hover:text-blue-400 transition-colors">Drum Kits</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Synth Presets</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Vocal Samples</a>
              <a href="#" className="hover:text-blue-400 transition-colors">MIDI Patterns</a>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-nowrap justify-center items-center gap-8">
            {features.map((feature, index) => (
              <div key={index} className="w-80 bg-gray-900/50 rounded-xl p-6 shadow-xl border border-gray-800/50 hover:border-blue-500/30 transition-all backdrop-blur-sm">
                <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="bg-gray-900/50 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-white tracking-tight text-center mb-16">How It <span className="font-medium">Works</span></h2>
          
          {screenshots.map((screenshot, index) => (
            <div key={index} className="mb-24 last:mb-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="bg-gray-800 p-4">
                    <img 
                      src={`/api/placeholder/600/400`}
                      alt={screenshot.title}
                      className="shadow-xl"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wider">{screenshot.title}</h3>
                  <p className="text-gray-400 tracking-wide">{screenshot.description}</p>
                  <ul className="space-y-3">
                    {screenshot.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2 text-gray-400 tracking-wide">
                        <ChevronRight className="h-4 w-4 text-blue-400" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-950/20 py-20 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light text-white tracking-tight mb-8">Ready to Start <span className="font-medium">Creating</span>?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
            Join thousands of musicians who are already creating professional tracks with our platform.
          </p>
          <button className="bg-blue-500/20 text-blue-300 px-8 py-3 rounded-lg hover:bg-blue-500/30 transition-all inline-flex items-center space-x-2 backdrop-blur-sm font-light">
            <Download className="h-5 w-5" />
            <span>Start Free Trial</span>
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900/50 text-gray-400 py-12 border-t border-gray-800/50 backdrop-blur-lg">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Music className="h-6 w-6 text-blue-400" />
              <span className="font-light text-white tracking-wider">808<span className="font-medium">BROKERS</span></span>
            </div>
            <div className="flex space-x-8 font-light text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Pricing</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MusicProductionSite;