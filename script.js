// This script handles the functionality of the email popup modal for our teams section
document.addEventListener("DOMContentLoaded", () => {
    const emailModal = document.getElementById('emailModal');
    const emailAddressElem = document.getElementById('modalEmailAddress');
    const modalTitle = document.getElementById('emailModalLabel');
    const copyBtn = document.getElementById('copyBtn');
    const toastElem = document.getElementById('copyToast');
    const toastBootstrap = new bootstrap.Toast(toastElem);

    let currentEmail = '';

    emailModal.addEventListener('show.bs.modal', event => {
        const trigger = event.relatedTarget;
        const name = trigger.getAttribute('data-name');
        const email = trigger.getAttribute('data-email');

        currentEmail = email;
        modalTitle.textContent = `Contact ${name}`;
        emailAddressElem.textContent = email;
    });

    copyBtn.addEventListener('click', () => {
        const tempInput = document.createElement("input");
        tempInput.value = currentEmail;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand("copy");
        document.body.removeChild(tempInput);

        toastBootstrap.show();
    });
});


// This script handles the product cards display and functionality
document.addEventListener("DOMContentLoaded", () => {
    const productContainer = document.getElementById("product-scroll");

    const products = [{
            icon: "bi-lightbulb-fill",
            color: "text-warning",
            title: "Content Differentiator",
            description: "Effortlessly compare two columns from your uploaded CSV or Excel file — the tool highlights row-by-row differences and lets you download a clean, structured Excel output. ✨",
            link: "https://content-differentiator.onrender.com/",
            button: "Explore Tool",
            btnClass: "btn-warning"
        },
        {
            icon: "bi-pencil-square",
            color: "text-success",
            title: "Cover Letter Generator",
            description: "Generate personalized cover letters in seconds. Boost your job applications with professionalism and confidence. 💼",
            link: "https://cover-letter-generator-phse.onrender.com/",
            button: "Try Generator",
            btnClass: "btn-success"
        },
        {
            icon: "bi-bar-chart-line",
            color: "text-warning",
            title: "Amazon Best Sellers Tracker",
            description: "Track the hottest best-selling products on Amazon by category. Discover trends, compare top items, and stay ahead of the market 📈🛒",
            link: "https://amazon-best-sellers-tracker.onrender.com",
            button: "Explore Now",
            btnClass: "btn-warning"
        },

                      
        // {
        // icon: "bi-journal-text",
        // color: "text-primary",
        // title: "AI MCQ Generator",
        // description: "Upload study material and auto-generate MCQs. Test your knowledge and get instant scores powered by smart AI 📘✨",
        // link: "ai-mcq-generator.html",
        // button: "Try Now",
        // btnClass: "btn-primary"
        // },
        // {
        // icon: "bi-file-earmark-bar-graph",
        // color: "text-warning",
        // title: "Smart Sheet Reanalyzer",
        // description: "Analyze Google Sheet posts with AI. Automate insights, pattern recognition, and smart re-analysis in one click 📊🤖",
        // link: "smart-sheet-ai.html",
        // button: "Analyze Sheet",
        // btnClass: "btn-warning"
        // },
        // {
        // icon: "bi-geo-alt-fill",
        // color: "text-danger",
        // title: "Maps Route Alert",
        // description: "Get the best route suggestion before departure. Combines Google Maps + AI to optimize travel 🚗🧭",
        // link: "ai-maps-alert.html",
        // button: "View Routes",
        // btnClass: "btn-danger"
        // },
        // {
        // icon: "bi-puzzle-fill",
        // color: "text-secondary",
        // title: "Jigsaw Puzzle Game",
        // description: "Challenge your brain with fun and interactive jigsaw puzzles. A perfect break for creative minds 🧩🎯",
        // link: "jigsaw.html",
        // button: "Play Puzzle",
        // btnClass: "btn-secondary"
        // },
        // {
        // icon: "bi-search-heart",
        // color: "text-info",
        // title: "Smart Text Matcher",
        // description: "Search with precision. Combine exact text match with semantic similarity using Hungarian Matching 🔍💡",
        // link: "semantic-search.html",
        // button: "Try Search",
        // btnClass: "btn-info"
        // }   


        // Add more products here
    ];

    // Center align if 3 or fewer products
    if (products.length <= 3) {
        productContainer.classList.add("center-content");
    }

    products.forEach(p => {
        const card = document.createElement("div");
        card.className = "product-card glass-card p-4 shadow-lg border-0 rounded-4 transition d-flex flex-column justify-content-between";
        card.innerHTML = `
    <div class="content">
        <div class="mb-3">
        <i class="bi ${p.icon} ${p.color} display-4"></i>
        </div>
        <h5 class="fw-bold">${p.title}</h5>
        <p class="text-muted small description">${p.description}</p>
    </div>
    <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="btn ${p.btnClass} rounded-pill px-4 fw-semibold">
        ${p.button} <i class="bi bi-arrow-right-circle ms-2"></i>
    </a>
    `;

        productContainer.appendChild(card);
    });
});


// Email Modal Functionality
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", async function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch("https://formspree.io/f/xkgbryar", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            status.textContent = "✅ Thank you! Your message has been sent.";
            status.style.color = "green";
            form.reset();
        } else {
            status.textContent = "❌ Oops! Something went wrong. Please try again.";
            status.style.color = "red";
        }
    });
});



// Team Members Scroll Section
document.addEventListener("DOMContentLoaded", () => {
    const teamContainer = document.getElementById("team-scroll");

    const teamMembers = [
        {
            name: "Hamza Ghojaria",
            role: "Founder & Data Scientist 👨‍💻",
            bio: "Passionate about driving innovation through Product Development. Expert in data science and machine learning, crafting solutions that empower businesses.",
            img: "static/hamza.jpeg",
            linkedin: "https://www.linkedin.com/in/hamzaghojaria/",
            email: "hamza.ghojaria123@gmail.com"
        },
        {
            name: "Saad Ghojaria",
            role: "Founder & BI Engineer 📊",
            bio: "Driven by analytics to shape smarter business decisions. Expert in business intelligence and data visualization, transforming complex data into actionable insights.",
            img: "static/saad.jpg",
            linkedin: "https://www.linkedin.com/in/saad-ghojaria/",
            email: "ghojariasaad@gmail.com"
        }
        
    ];

    if (teamMembers.length <= 3) {
        teamContainer.classList.add("center-content");
    }

    teamMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "team-card card border-0 text-dark h-100 p-3 glass-card text-center transition";
        card.style.width = "300px";
        card.innerHTML = `
            <img src="${member.img}" class="team-img rounded-circle mx-auto mt-4" alt="${member.name}">
            <div class="card-body">
                <h5 class="card-title fw-bold">${member.name}</h5>
                <p class="card-text">${member.role}</p>
                <p class="small text-muted bio">${member.bio}</p>
                <div class="social-icons mt-3">
                    <a href="${member.linkedin}" target="_blank" class="me-3 text-dark"><i class="bi bi-linkedin"></i></a>
                    <a href="#" class="text-dark" data-bs-toggle="modal" data-bs-target="#emailModal" data-name="${member.name}" data-email="${member.email}">
                        <i class="bi bi-envelope-fill"></i>
                    </a>
                </div>
            </div>
        `;
        teamContainer.appendChild(card);
    });
});



            
