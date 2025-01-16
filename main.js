// DOM Elements
const searchInput = document.querySelector('input[type="text"]');
const searchButton = searchInput.nextElementSibling;
const connectWalletButton = document.querySelector('button');

// Wallet Connection
let isWalletConnected = false;

const connectWallet = async () => {
    try {
        // Simulate wallet connection
        await new Promise(resolve => setTimeout(resolve, 1000));
        isWalletConnected = true;
        connectWalletButton.innerHTML = `
            <i data-lucide="wallet" class="h-5 w-5"></i>
            <span>Connected</span>
        `;
        connectWalletButton.classList.add('bg-blue-500/40');
        lucide.createIcons(); // Refresh icons
    } catch (error) {
        console.error('Error connecting wallet:', error);
    }
};

// Search Functionality
const handleSearch = () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log('Searching for:', searchTerm);
        // Implement search functionality here
    }
};

// Event Listeners
connectWalletButton.addEventListener('click', connectWallet);
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleSearch();
    }
});

// Responsive Navigation (if needed)
const handleResponsiveNav = () => {
    // Add responsive navigation functionality here if needed
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Any initialization code here
});

// Optional: Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});