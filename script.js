document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            const headerHeight = document.querySelector('header').offsetHeight; // Adjust header height
            const offset = headerHeight; // Add padding if needed
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});
document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('nav ul').classList.toggle('show');
});


// Project Data
const projects = {
    ecommerce: {
        title: "E-commerce Website (MERN Stack)",
        description: `
        <p>A feature-rich eCommerce website offering seamless product listing, detailed descriptions, secure user authentication, product reviews, and a visually appealing, user-friendly interface designed for optimal responsiveness across all devices.</p>
        <p>
        <strong>Features:</strong><br>
        📱 Responsive Design: Adaptable layout that works perfectly on all screen sizes.<br>
         🎨 Interactive Elements: Automatic scrolling and hover effects for an engaging user experience.<br>
         🛍️ Product Viewing: Browse products with detailed descriptions, reviews, and ratings.<br>
         🛒 Cart Functionality:<br>
         Add products to the cart and view a breakdown of pricing.<br>
         Calculate the total price and delete products dynamically.<br>
         🗂️ Product Categories: Products are well-organized into categories.<br>
         📩 Email Subscription Form: Stay updated with newsletters and exclusive offers.<br>
         🏷️ Home Page Promotions: Highlighted offers and related products to boost user engagement.<br>
         🔒 User Authentication:<br>
         Secure login using JWT for authentication.<br>
         Persistent cart data, ensuring previously added products remain accessible.<br>
        </p>
        <p>
        <strong>Technologies Used:</strong><br>
         <strong>Frontend Development</strong><br>
         React: For building interactive and dynamic user interfaces.<br>
         CSS3: To design responsive and visually appealing layouts, including hover effects and transitions.<br>
         <strong>Backend Development</strong><br>
         Node.js: JavaScript runtime for executing server-side operations.<br>
         Express.js: For creating RESTful APIs and managing server-side routing.<br>
         Database
         MongoDB: NoSQL database for efficient storage and management of user and product information.
         APIs<br>
         RESTful API: Facilitates seamless communication between the frontend and backend, supporting CRUD operations.<br>
         <strong>Authentication & Security</strong><br>
         JWT: For secure user authentication and maintaining session integrity.<br>
         bcrypt: Hashing passwords for enhanced security.<br>
         <strong>Deployment</strong><br>
         Vercel: For hosting the React frontend with continuous deployment from GitHub.<br>
         Render: For hosting the Node.js backend server.<br>
         Git & GitHub: For source code management and version control.<br>
        </p>
         

        `,
        web: "https://ecommerce-25hx.vercel.app/"
    },
    portfolio: {
        title: "Ai-styling-agent (React, Firebase, ResNet50 CNN)",
        description: `
            <p>The Styling Agent Using Deep Learning is a web-based solution designed to solve the daily dilemma of choosing what to wear. Leveraging advanced deep learning models to generate smart outfit recommendations for any occasion. With a user-friendly interface, you can easily upload and organize your clothing items in a virtual wardrobe and generate tailored outfit suggestions whenever needed. This makes deciding what goes well together effortless and stress-free! 👗👖</p>
            <p>
                <strong>Features ✨</strong><br>
                Deep Learning Model: Utilizes the ResNet50 Convolutional Neural Network (CNN) for extracting visual features from outfit combinations. 🧠<br>
                Personalized Recommendations: Offers fashion suggestions tailored to user preferences, enhancing outfit variety and reducing decision fatigue. 🎉<br>
                Similarity Measurement: Implements the Euclidean distance metric to compare features from a pre-existing large-scale dataset of fashion images, ranking the best outfit combinations. 📏<br>
                Seamless User Experience: Designed for easy navigation and interaction, ensuring a smooth experience for users seeking fashion guidance. 🖥️<br>
            </p>
            <p>
                <strong>Technologies Used 🛠️</strong><br>
                <strong>Frontend Development</strong><br>
                React: For creating a dynamic and responsive user interface.
                CSS: For styling and designing visually appealing components.<br>
                <strong>Backend Development</strong><br>
                Flask: A lightweight and powerful Python framework for building RESTful APIs.
                Firebase Authentication: For secure user authentication.
                Firebase Storage: For storing and retrieving user-provided images.<br>
                <strong>Deep Learning & Computer Vision</strong><br>
                PyTorch: Utilized for implementing and training deep learning models.
                TensorFlow: Complementary framework for deep learning tasks and model evaluation.
                ResNet50 (CNN): A pre-trained Convolutional Neural Network used for feature extraction and outfit matching.
                OpenCV (cv2): For image processing and manipulation.<br>
                <strong>APIs</strong><br>
                REST API: For seamless communication between the frontend and backend services.
                Programming Languages
                Python: For backend development, deep learning model implementation, and API integration.
            </p>
        `,
        web: "https://ai-styling-agent-gvq4-hqkuyp0yi-shreyamorti28s-projects.vercel.app/"
    },
    stockAnalysis: {
        title: "Stock Analysis Web Application",
        description: `
            <strong>Overview:</strong><br>
            This project is a stock analysis web application that allows users to fetch real-time stock data, analyze it, and visualize stock trends. The frontend is built with HTML and CSS, while the backend is powered by Python using the Flask framework. The backend utilizes various libraries like numpy, pandas, matplotlib, and yfinance to handle data processing and visualization.<br>
            <strong>Features ✨</strong><br>
            - Visualizing Stocks: Generate interactive plots and charts to visualize stock price movements and trends. 📊<br>
            - Comparing Stocks: Compare multiple stocks side by side to evaluate their performance using visual representations. 🔍<br>
            - Stock Risk Calculator: Assess the risk associated with different stocks based on historical data. ⚖️<br>
            - Complete Stock Data Analysis: Perform comprehensive analysis of stock data using various graphs and images. 📉<br>
            <strong>Technologies Used 🛠️</strong><br>
            <strong>Frontend:</strong><br>
            - HTML5: For structuring the web pages.<br>
            - CSS3: For styling and layout of the web pages.<br>
            <strong>Backend:</strong><br>
            - Python: Core programming language for data analysis and backend processing.<br>
            - Flask: Micro web framework for handling backend routing and requests.<br>
            - Numpy: For numerical computations.<br>
            - Pandas: For data manipulation and analysis.<br>
            - Matplotlib: For creating charts and visualizations.<br>
            - yfinance: For fetching real-time stock market data.<br>
        `,
        web: "./stock_market_analysis_tool.gif" // Ensure you have the corresponding GIF or video file
    }
};

// Function to Open Project Modal
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
            ${projectData.web
                ? `<div class="media-container">
                        <p>
                            <a href="${projectData.web}" target="_blank" class="project-link">
                                Visit ${projectData.title}
                            </a>
                        </p>
                   </div>`
                : ''
            }
        `;
    }
}


// Function to Close Project Modal
function closeProjectModal() {
    document.body.classList.remove("shifted"); // Remove the shifted class
    document.getElementById("projectModal").style.display = "none"; // Hide the modal
}
