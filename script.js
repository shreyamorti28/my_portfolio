// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth' // Smooth scroll to the target element
            });
        }
    });
});

// Project Data
const projects = {
    ecommerce: {
        title: "E-commerce Website (MERN Stack)",
        description: `
            <strong>Frontend Features:</strong><br>
            - Responsive Design: Adaptive layout for optimal viewing on mobile and desktop devices. 📱💻<br>
            - Interactive Elements: Automatic scrolling and hover effects enhance usability. 🎨<br>
            - Product Viewing: Detailed product descriptions, reviews, and ratings. ⭐<br>
            - Cart Functionality:<br>
              &nbsp;&nbsp;&nbsp;• Add products to the cart.<br>
              &nbsp;&nbsp;&nbsp;• View cart with pricing and total calculations.<br>
              &nbsp;&nbsp;&nbsp;• Delete products with automatic price updates.<br>
            - Product Categories: Organized exploration of products.<br>
            - Email Subscription Form: Users can sign up for newsletters and promotions.<br>
            - Home Page Promotions: Eye-catching banners for offers and related products.<br>
            - User Authentication: Secure login and persisted cart data, managed through a MongoDB database.<br>
            <strong>Admin Panel:</strong><br>
            - Add Products: Easily manage inventory by adding new products.<br>
            - View Products: Admins can view and manage all existing products.<br>
            <strong>Backend Technologies:</strong><br>
            - RESTful API: Facilitates CRUD operations for products and user data.<br>
            - Express.js: Handles routing and server-side logic.<br>
            - Node.js: JavaScript runtime for backend operations.<br>
            - MongoDB: NoSQL database for storing product and user information.<br>
            <strong>Technologies Used:</strong><br>
            - MongoDB: For data storage.<br>
            - Express.js: For backend API development.<br>
            - React: For building interactive user interfaces.<br>
            - Node.js: For server-side logic.<br>
            - CSS3: For responsive design.<br>
            - REST API: Ensures seamless communication between frontend and backend.
        `,
        videoSrc: "./Ecommerce_website.mp4"
    },
    portfolio: {
        title: "Portfolio Website (HTML, CSS, JavaScript)",
        description: `
            <p>Welcome to my portfolio website! This project showcases my work and skills as a developer. The website is built using HTML, CSS, and JavaScript, and is designed to be responsive and visually appealing across different devices.</p>
            <p>
                <strong>Features ✨</strong><br>
                - Responsive Design: The website adjusts seamlessly to various screen sizes, providing an optimal viewing experience on mobile, tablet, and desktop devices. 📱💻<br>
                - Beautiful UI: A clean and modern layout that highlights my projects and skills effectively. 🎨<br>
                - Interactive Elements: Engaging features and animations that enhance user experience. 🚀
            </p>
            <p>
                <strong>Technologies Used 🛠️</strong><br>
                - HTML5: For structuring the web pages.<br>
                - CSS3: For styling and layout.<br>
                - JavaScript: For interactive features and functionality.
            </p>
        `,
        videoSrc: "./portfolio_website.mp4"
    }
};

// Function to Open Project Modal
function openProjectModal(project) {
    document.body.classList.add("shifted"); // Add a class for styling
    document.getElementById("projectModal").style.display = "block"; // Show the modal

    // Set project details based on the selected project
    const modalDetails = document.getElementById("modalDetails");
    const projectData = projects[project];

    if (projectData) {
        modalDetails.innerHTML = `
            <h3>${projectData.title}</h3>
            <p>${projectData.description}</p>
            ${projectData.videoSrc ? `
                <div class="video-container">
                    <h2>Website Overview</h2>
                    <video width="800" height="450" controls>
                        <source src="${projectData.videoSrc}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    
                </div>
            ` : ''}
        `;
    }
}

// Function to Close Project Modal
function closeProjectModal() {
    document.body.classList.remove("shifted"); // Remove the shifted class
    document.getElementById("projectModal").style.display = "none"; // Hide the modal
}
