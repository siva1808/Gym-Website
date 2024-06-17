const menu = document.querySelector(".menu");
const menuList = document.querySelector(".heading-1 .navbar");

menu.addEventListener("click", () => {
    menuList.classList.toggle("showmenu");
    menu.children[0].classList.toggle("toggle1");
    menu.children[1].classList.toggle("toggle2");
    menu.children[2].classList.toggle("toggle3");
});

// BMI-Code

document.getElementById("bmiForm").addEventListener("submit", function (event) {
    event.preventDefault();
    calculateBMI();
});

function calculateBMI() {
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    var bmi = weight / (height * height);

    displayResult(bmi);
}

function displayResult(bmi) {
    var resultElement = document.getElementById("result");
    var category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    resultElement.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + category;
}

