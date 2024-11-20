document.getElementById("diet-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const gender = document.getElementById("gender").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value); // parse as decimal
    const height = parseInt(document.getElementById("height").value);
    const activityLevel = parseFloat(document.getElementById("activity").value);

    // Validate inputs
    if (!age || !weight || !height) {
        alert("Please enter valid values.");
        return;
    }

    let bmr;

    // Calculate BMR based on gender
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5; // BMR formula for males
    } else if (gender === "female") {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161; // BMR formula for females
    }

    // Adjust BMR with activity level to get TDEE (Total Daily Energy Expenditure)
    const tdee = bmr * activityLevel;

    // Display result
    document.getElementById("calories").textContent = Math.round(tdee); // Round to the nearest whole number
});
