const doctors = [
    {
        name: "Dr. Ramesh Kumar",
        specialization: "Cardiologist",
        image: "/img/team-2.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Dr. Priya Sharma",
        specialization: "Neurologist",
        image: "/img/team-3.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    },
    {
        name: "Dr. Anil Mehta",
        specialization: "Orthopedic Surgeon",
        image: "img/team-2.jpg",
        social: {
            facebook: "#",
            twitter: "#",
            linkedin: "#"
        }
    }
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
                        <div class="team-social">
                            <a class="btn btn-square" href="${doctor.social.facebook}"><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-square" href="${doctor.social.twitter}"><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-square" href="${doctor.social.linkedin}"><i class="fab fa-linkedin-in"></i></a>
                        </div>
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