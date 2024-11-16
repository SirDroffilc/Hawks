window.onload = function() {
    // Load footer dynamically

    // Fetch and populate the footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Set the active button based on the current page
    function setActiveButton() {
        // Get the current page from the URL (you can change this based on your page logic)
        const currentPage = window.location.pathname.split('/').pop().split('.').shift(); // Extract the base name without extension

        // Button image elements
        const questBtn = document.getElementById('quest-btn');
        const dashboardBtn = document.getElementById('dashboard-btn');
        const walletBtn = document.getElementById('wallet-btn');

        // Update the button images based on the active page
        if (currentPage === 'quest') {
            questBtn.src = "assets/quest-button-2.png"; // Lighter version of the quest button
            dashboardBtn.src = "assets/dashboard-button-1.png"; // Normal version for others
            walletBtn.src = "assets/wallet-button-1.png"; // Normal version for others
        } else if (currentPage === 'dashboard') {
            questBtn.src = "assets/quest-button-1.png"; // Normal version
            dashboardBtn.src = "assets/dashboard-button-2.png"; // Lighter version of the dashboard button
            walletBtn.src = "assets/wallet-button-1.png"; // Normal version
        } else if (currentPage === 'wallet') {
            questBtn.src = "assets/quest-button-1.png"; // Normal version
            dashboardBtn.src = "assets/dashboard-button-1.png"; // Normal version
            walletBtn.src = "assets/wallet-button-2.png"; // Lighter version of the wallet button
        }
    }
};
