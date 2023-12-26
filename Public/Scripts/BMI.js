//DOM
let heightInput = document.querySelector(`.input1`)
let weightInput = document.querySelector(`.input2`)
let button = document.querySelector(`.calculate`)

let calculate = function (event) {
    event.preventDefault()
    let height = parseFloat(heightInput.value) / 100
    let weight = parseFloat(weightInput.value)

    if (isNaN(height) || isNaN(weight)) {
        alert(`Invalid input for height or weight`)
        return false
    } else {
        let bmi = weight / (height * height)
        changeCard(bmi)
    }
}

let changeCard = function (bmi) {
    let card = document.querySelector(`.card-bmi`)
    let number = document.querySelector(`.number`)
    let category = document.querySelector(`.category`)
    let description = document.querySelector(`.description`)

    card.style.display = `block`;

    if (bmi >= 18 && bmi < 25) {
        card.style.backgroundColor = `green`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Normal`
        description.innerHTML = `Congratulations on maintaining a healthy and ideal weight for your height! Keep up the good work by continuing to enjoy a balanced diet and an active lifestyle. These habits will help you stay in this healthy range and feel your best`
    } else if (bmi < 18) {
        card.style.backgroundColor = `orange`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Underweight`
        description.innerHTML = `It's important to pay attention to your weight. Being underweight may indicate some health concerns. We strongly recommend consulting a healthcare professional to identify the root cause and create a plan to ensure you're getting the right nutrients for your well - being`
    } else if (bmi > 25 && bmi < 30) {
        card.style.backgroundColor = `orange`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Overweight`
        description.innerHTML = `Your commitment to a healthy lifestyle is admirable, but if you're in this category, there's room for improvement. You're on the right path — focus on maintaining a nutritious diet and regular exercise. Feel free to reach out to a healthcare provider or nutritionist for guidance if needed`
    } else if (bmi > 30 && bmi < 35) {
        card.style.backgroundColor = `red`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Obesity (Class 1)`
        description.innerHTML = `You've recognized the importance of health, and that's fantastic. It's time to take it up a notch. Consult a healthcare professional for a personalized plan to manage your weight effectively. Adjusting your diet and increasing physical activity can make a significant difference`
    } else if (bmi > 35 && bmi < 40) {
        card.style.backgroundColor = `red`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Obesity (Class 2)`
        description.innerHTML = `You're on a journey to a healthier you, and that's something to be proud of. This category suggests a higher risk of health issues, so it's crucial to seek professional guidance. A healthcare expert or dietitian can provide a more intensive plan tailored to your needs`
    } else if (bmi > 40) {
        card.style.backgroundColor = `darkRed`
        number.innerHTML = Math.round(bmi)
        category.innerHTML = `Extreme Obesity`
        description.innerHTML = `Your commitment to your health is admirable. However, this level of obesity requires comprehensive medical care. Consider reaching out to healthcare experts, possibly exploring therapy, and discussing potential surgical options to address this serious health concern`
    } else { }
}

button.addEventListener('click', calculate)