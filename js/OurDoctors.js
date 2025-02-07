const doctors = [
    {
        name: "Dr. Ashish Gupta",
        specialization: "Consultant Spine Surgeon",
        image: "./img/drAshish.png"
       
    },
    {
        name: "Dr. Neha Gupta",
        specialization: "Oncologist",
        image: "./img/doctor2.jpg"
        
    },
    {
        name: "Dr. Chetna",
        specialization: "Nephrologist",
        image: "./img/doctor3.jpg"
    
    },
    {
        name : "Dr. Anshul Jain",
        specialization:"Physician",
        image:"./img/doctor4.jpg" 
    },
    {
        name : "Dr. Rishabh Jain",
        specialization:"General & Leproscopic Surgeon",
        image:"./img/Rishavjain.png" 
    },
    {
        name : "Dr. Nashir Khan",
        specialization:"MBBs, MD, Respiratory Medicine",
        image:"./img/doctor6.jpg" 
    },
    {
        name : "Dr. Amjad Ali",
        specialization:"Cardiologist",
        image:"./img/doctor7.jpg" 
    },
    {
        name : "Dr. Minhajuddin Ahmad",
        specialization:"Pediatrician",
        image:"./img/doctor8.1.jpg" 
    },
   
];




// Function to dynamically generate doctor cards
function generateDoctors() {
    const doctorsContainer = document.getElementById("doctors-container");

    doctors.forEach(doctor => {
        const doctorCard = `
            <div class="col-lg-3 col-md-3">
                <div class="team-item bg-light rounded overflow-hidden">
                    <div class="team-img position-relative overflow-hidden">
                        <img class="img-fluid w-100" src="${doctor.image}" style="height: 300px; object-fit: cover;" alt="${doctor.name}">
                        
                    </div>
                    <div class="text-center py-4">
                        <h5 class="text-primary">${doctor.name}</h5>
                        <p class="text-uppercase m-0">${doctor.specialization}</p>
                         <button class="btn btn-primary mt-3 p-3" style="width: 90%;"
                            onclick="bookAppointment('${doctor.name}', '${doctor.specialization}')">
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        `;
        doctorsContainer.innerHTML += doctorCard;
    });
}

function bookAppointment(doctorName, specialization) {
    const appointmentPageURL = `appointment.html?name=${encodeURIComponent(doctorName)}&specialization=${encodeURIComponent(specialization)}`;
    window.location.href = appointmentPageURL;
}
// Call the function to generate the cards
generateDoctors();