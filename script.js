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
            description: "Uncover what makes your content stand out. Analyze, compare, and shine bright in the sea of content. Perfect for creators and digital strategists. ✨",
            link: "https://content-differentiator.onrender.com/",
            button: "Explore Tool",
            btnClass: "btn-warning"
        },
        {
            icon: "bi-pencil-square",
            color: "text-success",
            title: "Cover Letter Generator",
            description: "Generate personalized cover letters in seconds. Boost your job applications with AI-powered professionalism and confidence. 💼",
            link: "cover-letter.html",
            button: "Try Generator",
            btnClass: "btn-success"
        },

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