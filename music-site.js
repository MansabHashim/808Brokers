// Initialize Lucide icons
lucide.createIcons();

// Features data
const features = [
    {
        title: "Record",
        icon: "mic-2",
        description: "Professional-grade recording with noise cancellation"
    },
    {
        title: "Mix",
        icon: "waves",
        description: "Industry-standard mixing tools and effects"
    },
    {
        title: "Export",
        icon: "share-2",
        description: "Export in multiple formats with cloud backup"
    }
];

// Screenshots data
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

// Render features
function renderFeatures() {
    const featuresContainer = document.getElementById('features-container');
    
    features.forEach(feature => {
        const featureElement = document.createElement('div');
        featureElement.className = 'feature-card';
        
        featureElement.innerHTML = `
            <div class="feature-icon">
                <i data-lucide="${feature.icon}"></i>
            </div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        
        featuresContainer.appendChild(featureElement);
    });
    
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}

// Render screenshots
function renderScreenshots() {
    const screenshotsContainer = document.getElementById('screenshots-container');
    
    screenshots.forEach((screenshot, index) => {
        const screenshotElement = document.createElement('div');
        screenshotElement.className = 'screenshot-item';
        
        const isEven = index % 2 === 0;
        const imageHtml = `
            <div class="screenshot-image">
                <img src="/api/placeholder/600/400" alt="${screenshot.title}">
            </div>
        `;
        
        const contentHtml = `
            <div class="screenshot-content">
                <h3>${screenshot.title}</h3>
                <p>${screenshot.description}</p>
                <ul>
                    ${screenshot.features.map(feature => `
                        <li>
                            <i data-lucide="chevron-right"></i>
                            <span>${feature}</span>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        screenshotElement.innerHTML = isEven 
            ? imageHtml + contentHtml 
            : contentHtml + imageHtml;
        
        screenshotsContainer.appendChild(screenshotElement);
    });
    
    // Reinitialize icons for newly added elements
    lucide.createIcons();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderFeatures();
    renderScreenshots();
    
    // Add event listeners for interactive elements
    const connectWalletBtn = document.querySelector('.connect-wallet');
    if (connectWalletBtn) {
        connectWalletBtn.addEventListener('click', () => {
            alert('Wallet connection feature would be implemented here');
        });
    }
    
    const searchButton = document.querySelector('.search-button');
    if (searchButton) {
        searchButton.addEventListener('click', () => {
            const searchInput = document.querySelector('.search-input');
            alert(`Search functionality would be implemented here for: ${searchInput.value}`);
        });
    }
});
