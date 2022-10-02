function calculateBMI(event) {
    event.preventDefault()
    const weight= document.getElementById("weight").value
    const height= document.getElementById("height").value
    if (!weight || !height) {
        document.getElementById("bmi-result").innerHTML = "You need to fill all the fields!"
        return;
    }
    const bmi= weight/((height/100)**2)
    document.getElementById("bmi-result").innerHTML = "Your BMI is:" + bmi.toFixed(2)
    let message;
    if (bmi<18.5) {
       message = "You are underweight"
    } else if (bmi>=18.5 && bmi < 25) {
        message = "You are a healthy weight"
    } else if (bmi>=25 && bmi <30){
        message = "You are overweight"
    } else { 
        message = "You are obese"
    }

    // switch(true) {
    //     case (bmi<18.5):
    //         message = "You are underweight"
    //         break;
    //     case (bmi>=18.5 && bmi < 25):
    //         message = "You are a healthy weight"
    //         break;
    //     case (bmi>=25 && bmi <30):
    //         message = "You are overweight"
    //         break
    //     default:
    //         message = "You are obese"
    //  }
    document.getElementById("bmi-message").innerHTML = message
} 
