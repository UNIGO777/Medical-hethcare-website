

(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });



    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
})(jQuery);


const title = document.querySelector('title');

setInterval(() => {
    title.textContent = title.textContent === "Healthcare - Hospital Website" ? "1 new message" : "Healthcare - Hospital Website";
}, 1500);

const counters = document.querySelectorAll(".number");
const statsSection = document.getElementById("stats-section");
let started = false;

function startCounting() {
  if (started) return;

  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;

    let count = 0;
    const updateCounter = () => {
      if (count < target) {
        count += increment;
        counter.textContent = Math.floor(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };

    updateCounter();
  });

  started = true;
}

window.addEventListener("scroll", () => {
  const sectionTop = statsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight - 100) {
    startCounting();
  }
});



// Global Data Object
const data = {
    diagnostics: {
        services: [
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
            {
                icon: "fa-flask",
                title: "Blood Test",
                description: "Comprehensive blood tests for all health diagnostics.",
                specialists: ["Hematologist", "Pathologist"],
                doctors: [
                    {
                        name: "Dr. John Doe",
                        specialization: "Hematologist",
                        image: "img/team-1.jpg",
                        bio: "Expert in hematology with 10+ years of experience.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    },
                    {
                        name: "Dr. Jane Smith",
                        specialization: "Pathologist",
                        image: "img/team-2.jpg",
                        bio: "Renowned diagnostic expert specializing in pathology.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            },
        ],
        
    },
    medical: {
        services: [
            {
                icon: "fa-heartbeat",
                title: "Cardiology",
                description: "Advanced cardiology services for heart health.",
                specialists: ["Cardiologist"],
                doctors: [
                    {
                        name: "Dr. Emily Carter",
                        specialization: "Cardiologist",
                        image: "img/team-3.jpg",
                        bio: "Experienced cardiologist with a focus on patient care.",
                        socials: { twitter: "#", facebook: "#", linkedin: "#" }
                    }
                ]
            }
        ]
    }
};


function loadDivision(division, button) {
    const serviceContainer = document.getElementById("service");
    const buttons = document.querySelectorAll("#division-buttons button");
    const path = window.location.pathname;

    // Clear existing services
    serviceContainer.innerHTML = "";

    // Highlight active button
    buttons.forEach(btn => btn.classList.remove("active-button"));
    button.classList.add("active-button");
    const services = data[division]?.services || [];
    const maxServices = path.includes("index.html") ? 5 : services.length;

    // Render service cards
    if (data[division]?.services) {
        services.slice(0, maxServices).forEach((service, index) => {
            const card = document.createElement("div");
            card.className = "col-lg-4 col-md-6";
            card.style.cursor = "pointer";
            card.style.marginBottom = '20px'
            card.innerHTML = `
                <div class="service-item bg-light  rounded d-flex flex-column align-items-center justify-content-center text-center" >
                    <div class="service-icon mb-4">
                        <i class="fa fa-2x ${service.icon} text-white"></i>
                    </div>
                    <h4 class="mb-3">${service.title}</h4>
                    <p class="m-0">${service.description}</p>
                    <p class="text-primary small">Specialists: ${service.specialists.join(", ")}</p>
                   
                </div>
            `;
            serviceContainer.appendChild(card);
        });
        if (path.includes("index.html") && services.length > 5) {
            const seeAllCard = document.createElement("div");
            seeAllCard.className = "col-lg-4 col-md-6";
            seeAllCard.style.cursor = "pointer";
    
            seeAllCard.innerHTML = `
                <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                    <div class="service-icon mb-4">
                        <i class="fa fa-2x fa-th-list text-white"></i>
                    </div>
                    <h4 class="mb-3">See All</h4>
                    <p class="m-0">Explore all services available in this category</p>
                    <button class="btn btn-lg btn-primary btn-bg-primary mt-3 border-0 rounded-pill" onclick="navigateToAllServices('${division}')">
                        <i class="bi bi-arrow-right"></i> See All
                    </button>
                </div>
            `;
            serviceContainer.appendChild(seeAllCard);
        }
    }
}

function navigateToAllServices(division) {
    // Redirect to a dedicated services page (adjust URL as needed)
    window.location.href = `service.html?division=${division}`;
}


// Close modal when clicking outside modal content
document.getElementById("doctor-modal").addEventListener("click", (e) => {
    if (e.target === document.getElementById("doctor-modal")) {
        closeModal();
    }
});

// Initialize

document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.getElementById('btn-diagnostics');
    loadDivision('diagnostics', defaultButton);
});

