// Function to calculate age
function calculateAge(birthDate) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
  
    // If the birthday hasn't occurred yet this year, subtract 1 from age
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
  
    return age;
  }
  
  // Event listener for the "Calculate Age" button
  document.getElementById('calculateButton').addEventListener('click', function() {
    const birthdate = document.getElementById('birthdateInput').value;
    
    if (birthdate) {
      const age = calculateAge(birthdate);
      document.getElementById('ageDisplay').textContent = "Your age is: " + age;
    } else {
      document.getElementById('ageDisplay').textContent = "Please enter a valid birthdate!";
    }
  });
  
