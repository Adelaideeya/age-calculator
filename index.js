function calculateAge() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value) - 1; 
    var year = parseInt(document.getElementById("year").value);

    var dob = new Date(year, month, day);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    var nextBirthday = new Date(today.getFullYear() + 1, dob.getMonth(), dob.getDate());
    var monthsLeft = nextBirthday.getMonth() - today.getMonth();
    if (monthsLeft < 0 || (monthsLeft === 0 && today.getDate() > nextBirthday.getDate())) {
        monthsLeft += 12;
    }

    var daysLeft = Math.ceil((nextBirthday.getTime() - today.getTime()) / (1000 * 3600 * 24));

    var result = "Age: " + age + " years<br>";
    result += "Months left to next birthday: " + monthsLeft + " months<br>";
    result += "Days left to next birthday: " + daysLeft + " days";
    
    document.getElementById("result").innerHTML = result;
}












