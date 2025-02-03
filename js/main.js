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
                icon: "fas fa-brain",
                title: "MRI SCAN",
                description: "Magnetic Resonance Imaging for detailed internal images. Time taken: 30 to 60 minutes (Approx)."
            },
            {
                icon: "fas fa-x-ray",
                title: "CT SCAN",
                description: "Computed Tomography scan for cross-sectional images. Time taken: 10 to 30 minutes (Approx)."
            },
            {
                icon: "fas fa-wave-square",
                title: "3D/4D SONOGRAPHY",
                description: "Ultrasound imaging for various diagnostic purposes. Time taken: 30 to 60 minutes (Approx)."
            },
            {
                icon: "fas fa-tint",
                title: "COLOR DOPPLER",
                description: "Non-invasive test to evaluate blood flow through vessels. Time taken: 30 to 45 minutes (Approx)."
            },
            {
                icon: "fas fa-tint",
                title: "BLOOD TEST", 
                description: "Complete blood analysis including CBC, lipid profile, and blood sugar. Time taken: 2 to 3 hours (Approx)."
            },
            {
                icon: "fa-solid fa-pills",
                title: "VITAMIN CHECKUP",
                description: "Comprehensive vitamin and mineral deficiency screening. Time taken: 2 to 3 hours (Approx)."
            },
            {
                icon: "fa-solid fa-shield-virus",
                title: "ALLERGY TEST",
                description: "Detailed allergy screening and sensitivity tests. Time taken: 2 to 3 hours (Approx)."
            },
            {
                icon: "fa-solid fa-stethoscope",
                title: "BASIC HEALTH CHECK-UP",
                description: "Complete basic health screening. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fa-solid fa-heart", 
                title: "COMPREHENSIVE HEART CHECK-UP",
                description: "Detailed cardiac evaluation. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fa-solid fa-user-tie",
                title: "EXECUTIVE HEALTH CHECK-UP",
                description: "Comprehensive executive screening. Time taken: 4 to 5 Hours (Approx)."
            },
            {
                icon: "fa-solid fa-hospital-user",
                title: "WHOLE BODY CHECK-UP",
                description: "Complete body examination. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fa-solid fa-venus",
                title: "WELL WOMEN HEALTH CHECK-UP",
                description: "Women-specific health screening. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fas fa-user-plus",
                title: "SENIOR CITIZENS HEALTH CHECK-UP", 
                description: "Elder-focused health assessment. Time taken: 4 to 5 Hours (Approx)."
            },
            {
                icon: "fas fa-tint",
                title: "ADVANCED DIABETIC CHECK-UP",
                description: "Comprehensive diabetes screening. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fa-solid fa-child",
                title: "CHILD HEALTH CHECK-UP",
                description: "Pediatric health assessment. Time taken: 3 to 4 hours (Approx)."
            },
            {
                icon: "fas fa-clipboard-list",
                title: "OTHER DIAGNOSTIC TESTS",
                description: "Various other diagnostic tests as per physician's recommendation. Time taken: Varies."
            },
           
        ],
        additionalServices: [
            { icon: "fa-vials", title: "5-Hydroxyindoleacetic acid (5-HIAA), 24 Hours urine", description: "Evaluation for carcinoid syndrome." },
            { icon: "fa-dna", title: "Abnormal Hemoglobin study (Hb Electrophoresis)", description: "Detection of hemoglobin variants and disorders." },
            { icon: "fa-user-md", title: "Absolute Basophil Count", description: "Measurement of basophils in blood." },
            { icon: "fa-user-md", title: "Absolute CD19 Count by flowcytometry", description: "Quantification of CD19+ B-cells for immunological assessments." },
            { icon: "fa-syringe", title: "Blood Test", description: "Comprehensive blood tests for health diagnostics." },
            { icon: "fa-capsules", title: "5-Fluorouracil (5-FU)", description: "Drug level monitoring for chemotherapy." },
            { icon: "fa-user-md", title: "Absolute Basophil Count", description: "Measurement of basophils in blood." },
            { icon: "fa-user-md", title: "Absolute CD19 Count by flowcytometry", description: "Quantification of CD19+ B-cells for immunological assessments." }
        ]
    },
    medical: {
        services: [
            { icon: "fas fa-heartbeat", title: "Cardiology", description: "Specialized care for heart and cardiovascular health." },
    { icon: "fas fa-brain", title: "Neurology", description: "Diagnosis and treatment of nervous system disorders." },
    { icon: "fas fa-user-md", title: "Neurosurgery", description: "Surgical treatment for neurological conditions." },
    { icon: "fas fa-bone", title: "Orthopaedics", description: "Diagnosis and treatment of musculoskeletal disorders." },
    { image: "../img/kidney.png", title: "Nephrology", description: "Care for kidney-related health issues." },
    { icon: "fas fa-radiation", title: "Radiation Oncology", description: "Treatment of cancer using radiation therapy." },
    { icon: "fas fa-procedures", title: "Gastroenterology", description: "Diagnosis and treatment of digestive system disorders." },
    { icon: "fas fa-cut", title: "Gastro Surgery", description: "Surgical procedures for gastrointestinal issues." },
    { icon: "fas fa-syringe", title: "Onco Surgery", description: "Surgical treatment for cancer patients." },
    { icon: "fas fa-dna", title: "Medical Oncology", description: "Comprehensive cancer care and treatments." },
    { icon: "fas fa-venus-mars", title: "Reproductive Medicine", description: "Treatment for reproductive health issues." },
    { icon: "fas fa-female", title: "Obstetrics and Gynaecology", description: "Care for women's reproductive health." },
    { icon: "fas fa-baby", title: "Pediatrics & Neonatology", description: "Healthcare services for newborns and children." },
    { image: "../img/ent.png", title: "ENT", description: "Care for ear, nose, and throat disorders." },
    { icon: "fas fa-procedures", title: "Urology and Urosurgery", description: "Care for urinary tract and male reproductive system." },
    { image: "../img/brain.png", title: "Psychiatry", description: "Mental health assessment and treatment." },
    { icon: "fas fa-ambulance", title: "Ambulance Services", description: "Emergency transport and care." }

        ],
        
    },
    healthinsurance : {
        services: [
            { icon: "fa-shield-alt", title: "Individual Health Insurance", description: "Comprehensive coverage for individuals with customizable plans." },
            { icon: "fa-users", title: "Family Health Insurance", description: "Protection for the entire family with extensive medical coverage." },
            { icon: "fa-building", title: "Corporate Health Insurance", description: "Group health insurance plans for businesses and employees." },
            { icon: "fa-heart", title: "Critical Illness Coverage", description: "Specialized coverage for major illnesses and conditions." },
            { icon: "fa-hospital", title: "Hospital Cash Benefits", description: "Daily allowance during hospitalization periods." },
            { icon: "fa-wheelchair", title: "Senior Citizen Plans", description: "Tailored insurance plans for elderly healthcare needs." },
            { icon: "fa-baby", title: "Maternity Coverage", description: "Insurance for pregnancy and childbirth related expenses." },
            { icon: "fa-pills", title: "OPD Coverage", description: "Coverage for regular doctor visits and medications." },
            { icon: "fa-tooth", title: "Dental Insurance", description: "Coverage for dental procedures and treatments." },
            { icon: "fa-eye", title: "Vision Care Coverage", description: "Insurance for eye care and vision related expenses." },
            { icon: "fa-globe", title: "International Coverage", description: "Health insurance coverage while traveling abroad." }
        ],
        
    },
    homecare : {
        services : [
            
            { 
              icon: "fa-users", 
              title: "Elder Care", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
                icon: "fa-heart", 
                title: "Home Nursing Services", 
                description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
              },
            { 
              icon: "fa-walking", 
              title: "Physiotherapy", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
              icon: "fa-user-md", 
              title: "Doctor's Consultation", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
              icon: "fa-briefcase-medical", 
              title: "Medical Equipments", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
              icon: "fa-procedures", 
              title: "Paralysis Treatment", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
              icon: "fa-user-nurse", 
              title: "Trained Attendants", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            },
            { 
              icon: "fa-hands-helping", 
              title: "Care Taker At Home", 
              description: "Health care services offer the same service and care as in the hospital in terms of testing and evaluation by doctors, nurses, and other team members."
            }
          ],
          
    },
    Dialysis:{
        services : [
            { 
              icon: "fa-stethoscope", 
              title: "Dialysis Services", 
              description: "Expert dialysis services providing thorough health evaluations and prompt medical responses."
            },
            ]
        }
};


function loadDivision(division, button) {
    const serviceContainer = document.getElementById("service");
    const buttons = document.querySelectorAll("#division-buttons button");
    const path = window.location.pathname;
    
    // Update appointment form services dropdown if it exists
    const servicesSelect = document.getElementById("selectDocs");
    if (servicesSelect) {
        servicesSelect.innerHTML = '<option value="" selected disabled>Select Service</option>';
        const services = data[division]?.services || [];
        services.forEach(service => {
            const option = document.createElement("option");
            option.value = service.title;
            option.textContent = service.title;
            servicesSelect.appendChild(option);
        });
    }

    // Clear existing services
    serviceContainer.innerHTML = "";

    // Highlight active button
    buttons.forEach(btn => btn.classList.remove("active-button"));
    button.classList.add("active-button");
    const services = data[division]?.services || [];
    const maxServices = path.includes("index.html") || path === "/" ? 5 : services.length;

    // Render service cards
    if (data[division]?.services) {
        services.slice(0, maxServices).forEach((service, index) => {
            const card = document.createElement("div");
            card.className = "col-lg-4 col-md-6";
            card.style.cursor = "pointer";
            card.style.marginBottom = '20px'
            card.innerHTML = `
                <div class="service-item bg-light  rounded d-flex flex-column align-items-center justify-content-center text-center" onclick="locateContact()">
                    <div class="service-icon mb-4">
                        ${service.icon ? `<i class="fa fa-2x ${service.icon} text-white"></i>` : `<img src=${service.image} class="w-10 h-10 object-cover" style="width: 40px"/>`}
                    </div>
                    <h4 class="mb-3">${service.title}</h4>
                    <p class="m-0">${service.description}</p>
                    
                   
                </div>
            `;
            serviceContainer.appendChild(card);
        });
        if (path.includes("index.html") || path == "/" && services.length > 5) {
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


const locateContact = () => {
    window.location.href = 'contact.html'
}

// Initialize

document.addEventListener('DOMContentLoaded', () => {
    const defaultButton = document.getElementById('btn-medical');
    loadDivision('medical', defaultButton);
});

