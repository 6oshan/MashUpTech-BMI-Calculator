// var Age = document.getElementById("InputBox");
// var gender =document.getElementsByName("gender")
var Height = document.getElementById("InputBoxHeight");
var Weight = document.getElementById("InputBoxWeight");
// var height = InputBoxHeight
var displayBMI = document.getElementById("BMI")
var BMIStatus = document.getElementById("displayResult");
resultContant.style.display = "none"



// console.log(InputBoxHeight.value)
// console.log(Weight.value)

function submit() {
    resultContant.style.display = "none"
    let WResult = (parseFloat(Weight.value))
    console.log(WResult)
    let HResult = (parseFloat(Height.value / 100))
    console.log(HResult)
    if((isNaN(WResult) || WResult === 0) || isNaN(HResult) || HResult === 0) {
        displayBMI.innerHTML = "Invalid input";
    } else {
        let BMI = (WResult / (HResult * HResult)).toFixed(4)
        displayBMI.innerHTML = BMI;
        BMIStatus.innerHTML = (BMI < 18.5) ? "Under Weight"
            : (BMI >= 18.5 && BMI <= 24.9) ? "Normal weight"
                : (BMI >= 25.0 && BMI <= 29.9) ? "Over Weight"
                    : (BMI > 30.0) ? "Have Obesity" : "";
        resultContant.style.display = "flex"
    }
}


