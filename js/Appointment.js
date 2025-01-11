const doctors = [
    "Dr. Ashish Gupta",
    "Dr. Neha Gupta",
    "Dr. Chetna",
    "Dr. Anshul Jain",
    "Dr. Chetna",
    "Dr. Anshul Jain",
    "Dr. Rishabh Jain",
    "Dr. Nashir Khan",
    "Dr. Amjad Ali",
    "Dr. Minhajuddin Ahmad",
    "Dr. Minhajuddin Ahmad"
];

const selectOptions = doctors
    .map(doctor => `<option value="${doctor}">${doctor}</option>`)
    .join('');

const selectElement = document.getElementById('selectDocs');

selectElement.innerHTML = `<option value="" disabled selected>Select a Doctor</option>` + selectOptions;






function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        doctor: params.get('name'),
        department: params.get('specialization')
    };
}

// Populate the form fields with query parameter values
const params = getQueryParams();

console.log(params.doctor)





function selectOptionByValue(selectElementId, value) {
    const selectElement = document.getElementById(selectElementId);
    
    
    for (const option of selectElement.options) {
        if (option.value === value) {
            selectElement.value = value; // Set the selected value
            return;
        }
    }
}

// Retrieve query parameters

// Check and select doctor and department only if they exist in the options
if (params.doctor) {
    selectOptionByValue("selectDocs", params.doctor);
}
